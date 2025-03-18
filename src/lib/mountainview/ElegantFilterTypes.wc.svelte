<svelte:options customElement="mv-elegant-filtertypes" />

<script lang="ts">
  import ElegantSelect from "./ElegantSelect.wc.svelte";

  let {
    types,
    sorts,
    typeselect,
    sortselect,
    view = $bindable("card"),
    viewselect,
  }: {
    types: {
      name: string,
      icon: string
    }[],
    sorts: string[],
    typeselect: (typeState: {[key: string]: boolean}) => void,
    sortselect: (sort: string) => void,
    view: string,
    viewselect?: (view: string) => void
  } = $props();

  let selected: { [key: string]: boolean } = $state({});

  function typeClick(name: string) {
    if (!selected[name]) selected[name] = true;
    else selected[name] = false;

    if (typeselect) {
      typeselect(selected);
    }
  }

  function sortSelect(select: string) {
    if (sortselect) {
      sortselect(select);
    }
  }

  function viewToggle() {
    if (view === "CARD") {
      view = "TABLE";
    } else {
      view = "CARD";
    }

    if (viewselect) viewselect(view);
  }
</script>

<div class="filterbar_frame">
  <div class="options">
    {#each types as type}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="filterbar_option"
        class:filterbar_option_selected={selected[type.name]}
        onclick={() => typeClick(type.name)}
      >
        {#if selected[type.name] === true}
          <div class="icon">✓</div>
        {:else}
          <div class="icon">{type.icon}</div>
        {/if}
        <div class="name">{type.name}</div>
      </div>
    {/each}
  </div>
  <div class="filter">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="view_toggle" onclick={viewToggle}>
      {#if view === "CARD"}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <path
              d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z"
              stroke="#d8d8d8"
              stroke-width="2"
            ></path>
          </g></svg
        >
      {:else}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#d8d8d8"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <title></title>
            <g id="Complete">
              <g id="grid">
                <g>
                  <rect
                    fill="none"
                    height="7"
                    stroke="#d8d8d8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="7"
                    x="14.5"
                    y="2.5"
                  ></rect>
                  <rect
                    fill="none"
                    height="7"
                    stroke="#d8d8d8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="7"
                    x="14.5"
                    y="14.5"
                  ></rect>
                  <rect
                    fill="none"
                    height="7"
                    stroke="#d8d8d8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="7"
                    x="2.5"
                    y="2.5"
                  ></rect>
                  <rect
                    fill="none"
                    height="7"
                    stroke="#d8d8d8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="7"
                    x="2.5"
                    y="14.5"
                  ></rect>
                </g>
              </g>
            </g>
          </g></svg
        >
      {/if}
    </button>
    <ElegantSelect input="Latest" options={sorts} onInput={sortSelect} />
  </div>
</div>

<style>
  .filterbar_frame {
    display: flex;
    max-width: 2000px;
    /* margin: 20px 10px 0px 16px; */
    margin: 20px auto 0px auto;
  }

  .options {
    display: flex;
    justify-content: left;
    width: 100%;
    margin-left: 16px;
  }

  .filter {
    display: flex;
    margin-right: 16px;
  }

  .filterbar_option {
    display: flex;
    min-width: 20px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(51, 103, 214);
    margin-right: 6px;
    margin-bottom: 4px;
    height: 20px;
    padding: 4px 8px 6px;
    border-radius: 44px;
    border-width: 1px;
    border-style: solid;
    border-color: lightgray;
    user-select: none;
  }

  .filterbar_option_selected {
    background-color: rgb(209, 227, 255);
  }

  .filterbar_option:hover {
    cursor: pointer;
    background-color: rgb(209, 227, 255);
  }

  .icon {
    color: rgb(51, 103, 214);
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    width: 18px;
    margin-right: 6px;
  }

  .name {
    float: right;
    margin-top: 2px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(51, 103, 214);
  }

  .view_toggle {
    margin-right: 12px;
    width: 44px;
    border: 0px;
    background-color: transparent;
  }

  .view_toggle:hover {
    cursor: pointer;
  }
</style>
