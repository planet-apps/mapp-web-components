<svelte:options customElement="ing-props" />

<script>
  import { writable } from 'svelte/store';

  // --- Props ---
  /** Initial list of items. Each item MUST have a unique `id`. */
  export let initialItems = [
    { id: 1, text: 'Walk the dog' },
    { id: 2, text: 'Feed the cat' },
    { id: 3, text: 'Water the plants' },
    { id: 4, text: 'Read a book' },
    { id: 5, text: 'Write some code' },
  ];

  // --- State ---
  /** Writable store to hold the items array, making it reactive */
  const items = writable(initialItems);

  /** ID of the item currently being dragged */
  let draggedItemId = null;
  /** Index of the potential drop target */
  let dropTargetIndex = null;
  /** Flag to indicate if dragging is actively happening */
  let isDragging = false;

  // --- Drag Handlers ---

  function handleDragStart(event, itemId) {
    // Store the ID of the item being dragged
    draggedItemId = itemId;
    isDragging = true;
    // Required for Firefox: Set data to be transferred
    event.dataTransfer.setData('text/plain', itemId);
    event.dataTransfer.effectAllowed = 'move';
    // Optional: Slightly dim the dragged item
    event.target.style.opacity = '0.5';
  }

  function handleDragOver(event, targetIndex) {
    // Prevent default behavior to allow dropping
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

    // Update the potential drop target index for visual feedback
    const targetElement = event.target.closest('li'); // Get the list item
    if (!targetElement || dropTargetIndex === targetIndex) return; // Avoid unnecessary updates

    dropTargetIndex = targetIndex;

  }

  function handleDragLeave(event) {
     // Reset drop target index when leaving a potential drop zone boundary
     // Check if relatedTarget (where mouse is going) is outside the current item
     const li = event.target.closest('li');
     if (li && !li.contains(event.relatedTarget)) {
         if (dropTargetIndex === parseInt(li.dataset.index)) {
            dropTargetIndex = null; // Reset only if leaving the *current* target
         }
     } else if (!li) {
         // If we left the list entirely
         dropTargetIndex = null;
     }
  }


  function handleDrop(event, targetIndex) {
    event.preventDefault();
    if (draggedItemId === null) return; // Shouldn't happen, but safety first

    // Find the actual item objects and their original index
    let draggedItem = null;
    let draggedIndex = -1;

    // Get the current value from the store
    const currentItems = $items;

    currentItems.forEach((item, index) => {
      if (item.id === draggedItemId) {
        draggedItem = item;
        draggedIndex = index;
      }
    });

    // If dragged item not found or dropped onto itself, do nothing
    if (!draggedItem || draggedIndex === targetIndex) {
      resetDragState();
      cleanupStyles(); // Ensure styles are reset even if no drop occurs
      return;
    }

    // --- Reordering Logic ---
    // 1. Remove the item from its original position
    const newItems = [...currentItems]; // Create a mutable copy
    newItems.splice(draggedIndex, 1);

    // 2. Insert the item at the target position
    // Important: If moving *down*, the targetIndex remains correct after removal.
    // If moving *up*, the targetIndex needs adjustment if it was after the original position.
    // However, inserting at the `targetIndex` *before* adjusting handles both cases correctly when splicing.
    newItems.splice(targetIndex, 0, draggedItem);

    // 3. Update the store to trigger reactivity
    items.set(newItems);

    resetDragState();
    cleanupStyles(); // Clean up styles after successful drop
  }

  function handleDragEnd(event) {
    // Reset opacity and other states regardless of whether drop was successful
    resetDragState();
    cleanupStyles();
  }

  // --- Helper Functions ---
  function resetDragState() {
    draggedItemId = null;
    dropTargetIndex = null;
    isDragging = false;
  }

  // Helper to clean up opacity style potentially left on items
  function cleanupStyles() {
      // Remove opacity styles added during dragStart
      const listItems = document.querySelectorAll('.reorderable-list li');
      listItems.forEach(item => item.style.opacity = '1');
  }

  // Expose the items store if needed by parent component
  export const getItems = () => $items;

</script>

<div class="reorderable-list-container">
  <h2>Reorder List</h2>
  <ul class="reorderable-list">
    {#each $items as item, index (item.id)}
      <li
        draggable="true"
        on:dragstart={(event) => handleDragStart(event, item.id)}
        on:dragover={(event) => handleDragOver(event, index)}
        on:dragleave={handleDragLeave}
        on:drop|preventDefault={(event) => handleDrop(event, index)}
        on:dragend={handleDragEnd}
        class:dragging={item.id === draggedItemId}
        class:drag-over-indicator={index === dropTargetIndex && item.id !== draggedItemId}
        data-id={item.id}
        data-index={index}
      >
        <span>{item.text}</span>
      </li>
    {/each}
  </ul>

  </div>

<style>
  .reorderable-list-container {
    font-family: sans-serif;
    max-width: 400px;
    margin: 2em auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .reorderable-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px dashed #ddd; /* Visual boundary for the list */
  }

  .reorderable-list li {
    padding: 12px 15px;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    cursor: move; /* Indicate draggable item */
    transition: background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
    position: relative; /* Needed for the ::before pseudo-element */
    user-select: none; /* Prevent text selection during drag */
  }

  .reorderable-list li:hover {
      border-color: #ccc;
  }

  /* Style for the item being actively dragged */
  .reorderable-list li.dragging {
    /* Opacity is handled inline in handleDragStart for simplicity,
       but you could use this class too */
    /* opacity: 0.5; */
    background-color: #e0e0e0;
    border-color: #ccc;
  }

  /* Visual indicator for the drop target */
  .reorderable-list li.drag-over-indicator::before {
    content: '';
    position: absolute;
    top: -3px; /* Position above the item */
    left: 0;
    right: 0;
    height: 4px;
    background-color: dodgerblue; /* Highlight color */
    border-radius: 2px;
  }

  /* Optional: Indicate the whole list is a drop zone when dragging */
  /* This might be too visually noisy depending on your design */
  /*
  .reorderable-list-container:has(li.dragging) .reorderable-list {
      border: 2px dashed dodgerblue;
  }
  */

</style>