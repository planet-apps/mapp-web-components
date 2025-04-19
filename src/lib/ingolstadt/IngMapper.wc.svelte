<script>
  import { onMount, onDestroy } from 'svelte';

  // --- Props ---
  // Define the data structures for left and right sides
  // Expected format: [{ id: 'unique_id_1', label: 'Property 1' }, ...]
  export let leftProperties = [
    { id: 'l_name', label: 'Name' },
    { id: 'l_email', label: 'Email Address' },
    { id: 'l_age', label: 'Age' },
    { id: 'l_city', label: 'City' },
  ];
  export let rightProperties = [
    { id: 'r_username', label: 'Username' },
    { id: 'r_contact', label: 'Contact Info' },
    { id: 'r_dob', label: 'Date of Birth' },
    { id: 'r_location', label: 'Location' },
    { id: 'r_id', label: 'Identifier' },
  ];

  // --- State ---
  let connections = []; // Stores the established connections: { from: 'left_id', to: 'right_id' }
  let currentLine = null; // Stores info for the line being drawn: { startX, startY, endX, endY, fromId }
  let svgElement; // Reference to the SVG container
  let propertyElements = {}; // Store references to property DOM elements { 'prop_id': element }
  let svgOffset = { top: 0, left: 0 }; // Offset of the SVG container

  // --- Logic ---

  // Function to calculate SVG offset on mount and resize
  function calculateSvgOffset() {
    if (svgElement) {
      const rect = svgElement.getBoundingClientRect();
      svgOffset = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };
      // Force redraw of connections if offset changes
      connections = [...connections];
    }
  }

  // Calculate offset when the component mounts and on window resize
  onMount(() => {
    calculateSvgOffset();
    window.addEventListener('resize', calculateSvgOffset);
    window.addEventListener('scroll', calculateSvgOffset, true); // Capture scroll events
  });

  // Clean up event listeners
  onDestroy(() => {
    window.removeEventListener('resize', calculateSvgOffset);
    window.removeEventListener('scroll', calculateSvgOffset, true);
  });

  // Get the center coordinates of a property element relative to the SVG container
  function getPropertyCenter(propertyId) {
    const element = propertyElements[propertyId];
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    // Calculate center relative to the viewport
    const viewportX = rect.left + rect.width / 2;
    const viewportY = rect.top + rect.height / 2;

    // Adjust for SVG container's position and scroll
    const svgX = viewportX - svgOffset.left;
    const svgY = viewportY - svgOffset.top;

    return { x: svgX, y: svgY };
  }

  // Start drawing a line from a left property
  function handleStartLine(event, propertyId) {
    // Prevent starting a new line if one is already being drawn
    if (currentLine) return;
    // Prevent connecting if already connected from this property
    if (connections.some(conn => conn.from === propertyId)) return;


    const startCoords = getPropertyCenter(propertyId);
    if (startCoords) {
      currentLine = {
        startX: startCoords.x,
        startY: startCoords.y,
        endX: startCoords.x, // Initialize end coords to start coords
        endY: startCoords.y,
        fromId: propertyId,
      };
      // Add listeners to track mouse movement and mouse up on the whole window
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp, { once: true }); // Remove listener after first trigger
    }
  }

  // Update the end position of the line as the mouse moves
  function handleMouseMove(event) {
    if (!currentLine) return;

    // Calculate mouse position relative to the SVG container
    const svgX = event.clientX - svgOffset.left;
    const svgY = event.clientY - svgOffset.top;

    // Update the current line's end coordinates
    currentLine = { ...currentLine, endX: svgX, endY: svgY };
  }

  // Stop drawing the line when the mouse is released
  function handleMouseUp(event) {
      // Check if the mouseup event occurred over a valid target (right property)
      // This simple check uses event.target but a more robust solution might involve
      // checking if the mouse coordinates are within the bounds of any right property element.
      const targetElement = event.target.closest('.property-item[data-side="right"]');

      if (targetElement) {
          const targetId = targetElement.getAttribute('data-id');
          handleEndLine(targetId); // Try to complete the connection
      } else {
          // If mouse up is not on a valid target, cancel the line drawing
          cancelLine();
      }
      // Clean up window listeners regardless of connection success
      window.removeEventListener('mousemove', handleMouseMove);
      // Note: mouseup listener is already set to { once: true }
  }


  // Complete the connection if the mouse is released over a right property
  function handleEndLine(propertyId) {
    if (!currentLine) return; // Shouldn't happen if logic is correct, but good safety check

    // Prevent connecting if the target property is already connected
    if (connections.some(conn => conn.to === propertyId)) {
        cancelLine();
        return;
    }


    const endCoords = getPropertyCenter(propertyId);
    if (endCoords) {
      // Add the new connection
      connections = [
        ...connections,
        { from: currentLine.fromId, to: propertyId },
      ];
    }
    // Reset the current line state whether connection was successful or not
    currentLine = null;
    // Clean up listeners (already done in handleMouseUp)
  }

  // Cancel drawing the current line
  function cancelLine() {
    currentLine = null;
    // Ensure listeners are removed if cancellation happens differently than mouseup
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  // Remove a connection
  function removeConnection(fromId, toId) {
    connections = connections.filter(
      (conn) => !(conn.from === fromId && conn.to === toId)
    );
  }

  // Reactive statement to recalculate line coordinates when connections change or elements move
  $: connectionLines = connections.map(({ from, to }) => {
    const start = getPropertyCenter(from);
    const end = getPropertyCenter(to);
    if (start && end) {
      return { from, to, x1: start.x, y1: start.y, x2: end.x, y2: end.y };
    }
    return null; // Return null if element positions aren't ready yet
  }).filter(line => line !== null); // Filter out nulls

  // Helper to check if a property is connected
  const isConnected = (propId, side) => {
    if (side === 'left') {
      return connections.some(conn => conn.from === propId);
    } else {
      return connections.some(conn => conn.to === propId);
    }
  };

</script>

<div class="property-mapper-container">
  <svg bind:this={svgElement} class="connection-svg">
    {#each connectionLines as line (line.from + '-' + line.to)}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke="dodgerblue"
        stroke-width="2"
        marker-end="url(#arrowhead)"
        style="cursor: pointer;"
        on:click={() => removeConnection(line.from, line.to)}
      />
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke="transparent"
        stroke-width="10"
        style="cursor: pointer;"
        on:click={() => removeConnection(line.from, line.to)}
      />
    {/each}

    {#if currentLine}
      <line
        x1={currentLine.startX}
        y1={currentLine.startY}
        x2={currentLine.endX}
        y2={currentLine.endY}
        stroke="lightgray"
        stroke-width="2"
        stroke-dasharray="4 2"
        marker-end="url(#arrowhead-preview)"
      />
    {/if}

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="dodgerblue" />
      </marker>
       <marker id="arrowhead-preview" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="lightgray" />
      </marker>
    </defs>
  </svg>

  <div class="columns">
    <div class="column">
      <h2>Source Properties</h2>
      <ul>
        {#each leftProperties as prop (prop.id)}
          <li
            bind:this={propertyElements[prop.id]}
            class="property-item"
            class:connected={isConnected(prop.id, 'left')}
            class:disabled={isConnected(prop.id, 'left')}
            on:mousedown={(e) => handleStartLine(e, prop.id)}
            data-id={prop.id}
            data-side="left"
            title={isConnected(prop.id, 'left') ? 'Already connected' : 'Click and drag to connect'}
          >
            {prop.label}
          </li>
        {/each}
      </ul>
    </div>

    <div class="column">
      <h2>Target Properties</h2>
      <ul>
        {#each rightProperties as prop (prop.id)}
          <li
            bind:this={propertyElements[prop.id]}
            class="property-item property-target"
             class:connected={isConnected(prop.id, 'right')}
             class:disabled={isConnected(prop.id, 'right')}
            on:mouseup={() => handleEndLine(prop.id)}
             on:mouseenter={(e) => e.target.classList.add('hovering')}
             on:mouseleave={(e) => e.target.classList.remove('hovering')}
            data-id={prop.id}
            data-side="right"
            title={isConnected(prop.id, 'right') ? 'Already connected' : 'Release mouse here to connect'}
          >
            {prop.label}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .property-mapper-container {
    position: relative; /* Needed for absolute positioning of SVG */
    display: flex;
    font-family: sans-serif;
    min-height: 300px; /* Ensure container has height */
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden; /* Hide SVG overflow */
  }

  .connection-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allow clicks to pass through to elements below */
    z-index: 1; /* Ensure SVG is above columns but below interactive elements if needed */
  }

   /* Make lines clickable */
  .connection-svg line {
    pointer-events: stroke; /* Only the line stroke itself is interactive */
  }


  .columns {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9f9; /* Background for columns */
    z-index: 0; /* Ensure columns are behind SVG lines */
  }

  .column {
    width: 45%; /* Adjust width as needed */
    border: 1px solid #eee;
    padding: 15px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .column h2 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.1em;
    color: #333;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .property-item {
    padding: 10px 15px;
    margin-bottom: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    cursor: grab;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    text-align: center;
    position: relative; /* Needed for potential future absolute positioning inside */
    z-index: 2; /* Ensure property items are clickable above the SVG */
     pointer-events: auto; /* Make sure items are interactive */
  }

  .property-item:not(.disabled):hover {
     border-color: dodgerblue;
     background-color: #eef6ff;
  }

  .property-item.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #f0f0f0;
  }

   .property-item.connected {
      border-left: 4px solid dodgerblue; /* Indicate connection */
   }

   .property-target.hovering:not(.disabled) {
       background-color: #d4edda; /* Highlight potential drop target */
       border-color: #c3e6cb;
   }


  /* Style adjustments for left (source) and right (target) */
  .column:first-child .property-item:not(.disabled) {
    /* Specific styles for draggable items if needed */
  }
   .column:last-child .property-item {
     cursor: default; /* Target items aren't draggable */
   }

   .column:last-child .property-item:not(.disabled) {
      cursor: crosshair; /* Indicate it's a drop target */
   }


</style>
