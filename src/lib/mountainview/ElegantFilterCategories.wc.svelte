<svelte:options customElement="mv-elegant-filtercats" />

<script lang="ts">
  let { categories, categoryselect }: {
    categories: {
        name: string,
        letter: string
      }[],
      categoryselect: (categoryState: {[key: string]: boolean}) => void
  } = $props();

  let selected: { [key: string]: boolean } = $state({});

  function categoryClick(name: string) {
    if (!selected[name]) selected[name] = true;
    else selected[name] = false;

    if (categoryselect) {
      categoryselect(selected);
    }
  }
</script>

<div class="filterbar_frame">
  {#each categories as category}
    <div class="filterbar_option">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="letter"
        class:letter_selected={selected[category.name]}
        onclick={() => categoryClick(category.name)}
      >
        {category.letter}
      </div>
      <div class="name">
        {category.name}
      </div>
    </div>
  {/each}
</div>

<style>
  .filterbar_frame {
    display: flex;
    justify-content: center;
  }

  .filterbar_option {
    display: flex;
    flex-flow: row wrap;
    width: 60px;
    height: 100px;
    margin: 8px;
    user-select: none;
    /* background-color: red; */
  }

  .letter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    margin: 2px 2px 0px 2px;
    border-radius: 80%;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #3367d6;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
  }

  .letter_selected {
    background-color: rgb(228, 228, 228);
  }

  .letter:hover {
    cursor: pointer;
    border-color: lightgray;
  }

  .name {
    width: 100%;
    position: relative;
    top: -8px;
    text-align: center;
    color: gray;
    font-size: 14px;
  }
</style>
