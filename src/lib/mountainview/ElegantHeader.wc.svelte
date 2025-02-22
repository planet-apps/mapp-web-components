<svelte:options customElement="mountainview-elegant-header" />

<script lang="ts">
  import DropDown from "./ElegantDropDown.wc.svelte";

  let {
    title="",
    logoUrl="",
    rightMenus=[]
  } = $props();

  let menuVisibleFlags: {[key: string]: boolean} = $state({});

  function menuClick(e: any, name: string) {
    if (e) e.stopPropagation();
    // first hide all other menus
    for (const key of Object.keys(menuVisibleFlags)) {
      if (key != name) menuVisibleFlags[key] = false;
    }

    if (!menuVisibleFlags[name])
      menuVisibleFlags[name] = true;
    else
      menuVisibleFlags[name] = false;
  }

  function getElementPosition(name: string): {top: string, left: string} {
    let result: {top: string, left: string} = {top: "54px", left: "12px"};
    let elem = document.getElementById(name);

    if (elem) {
      var rect = elem.getBoundingClientRect();
      result.top = (rect.top + rect.height + 4).toString() + "px";
      result.left = (rect.right - 200).toString() + "px";
    }

    return result;
  }

  document.onclick = function docClick() {
    for (const key of Object.keys(menuVisibleFlags)) {
      menuVisibleFlags[key] = false;
    }
  }
</script>

<div class="header">
  {#if title || logoUrl}
    <a href="https://google.com" target="_blank" class="title">

      {#if logoUrl}
        <img class="title_logo" alt="logo" width="36px" style="padding: 6px;" src={logoUrl} />
      {/if}
      {#if title}
        <span class="title_text">{title}</span>
      {/if}
    </a>
  {/if}

  <div class="right_menus">
    {#each rightMenus as menu}
      <button class="menu_button" id={menu.title + "_button"} onclick={(e) => menuClick(e, menu.title)}>
        <img class="menu_icon" class:round={menu.imageShape==="round"} alt={menu.title} src={menu.imageUrl} /></button>

      {#if menuVisibleFlags[menu.title]}
        <DropDown menuItems={menu.items} top={getElementPosition(menu.title + "_button").top} left={getElementPosition(menu.title + "_button").left}></DropDown>
      {/if}
    {/each}
  </div>
</div>


<style>

  .header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-color: rgba(255, 255, 255, 1);
    height: 57px;
    font-weight: 560;
    color: #333;
    font-size: 20px;
    padding: 0px;
    margin: 0px;
    position: sticky;
    top: 0;
    z-index: 2;
    border-bottom: solid 1px rgba(222, 222, 222, 1);
  }

  .title {
    height: 100%;
    display: flex;
    margin-left: 12px;
  }

  .title_text {
    display: flex;
    align-items: center;
  }

  .right_menus {
    display: flex;
    height: 100%;
    flex: auto;
    flex-flow: row-reverse;
  }

  .menu_button {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 18px;
    cursor: pointer;
    border: 0px;
    background-color: transparent;
  }

  .menu_icon {
    height: 40px;
    width: 40px;
    object-fit: cover;
  }

  .round {
    border-radius: 50%;
  }
</style>