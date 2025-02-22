<svelte:options customElement="mountainview-elegant-filtertypes" />

<script lang="ts">
  import ElegantSelect from "./ElegantSelect.wc.svelte";

  let {types, onTypeSelect} = $props();

  let selected: {[key: string]: boolean } = $state({});

  function typeClick(name: string) {
    if (!selected[name])
      selected[name] = true;
    else
      selected[name] = false;

    if (onTypeSelect) {
      onTypeSelect(selected);
    }
  }
  
  function onFilterSelect(select: string) {
    console.log("Temp filter select from ElegantFilterTypes: " + select);
  }
  
  </script>

<div class="filterbar_frame">
  <div class="options">
    {#each types as type}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="filterbar_option" class:filterbar_option_selected={selected[type.name]} onclick={() => typeClick(type.name)}>
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
    <ElegantSelect input="Latest descending" options={["Latest descending", "Most claps", "Most comments"]} onInput={onFilterSelect}/>
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
    justify-content:left;
    width: 100%;
    margin-left: 16px;
  }

  .filter {
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
</style>