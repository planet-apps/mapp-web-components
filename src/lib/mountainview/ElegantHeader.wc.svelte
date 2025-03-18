<svelte:options customElement="mv-elegant-header" />

<script lang="ts">
  import DropDown from "./ElegantDropDown.wc.svelte";

  let {
    title="",
    titleImageUrl="",
    headerMenus=[]
  }: {
    title: string,
    titleImageUrl: string,
    headerMenus: {
      title: string,
      imageUrl: string,
      imageShape: string,
      items: {
        title: string,
        url: string
      }[]
    }[]
  } = $props();

  if (typeof(headerMenus) == "string") {
    headerMenus = JSON.parse(headerMenus);
  }

  let menuVisibleFlags: {[key: string]: boolean} = $state({});
  let menuButtons: {[key: string]: HTMLElement} = $state({});

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

  function getMenuPosition(name: string): {top?: string, left?: string} {
    let result: {top?: string, left?: string} = {};
    let elem = undefined;
    if (menuButtons[name]) elem = menuButtons[name];

    if (elem) {
      var rect = elem.getBoundingClientRect();
      result.top = (rect.top + rect.height + 12).toString() + "px";
      result.left = (rect.left - 150).toString() + "px";
      console.log(result);
    } else {
      console.log("Could not find element with id: " + name);
    }

    return result;
  }

  function formatName(text: string): string {
    return text.toLowerCase().replaceAll(" ", "_");
  }

  document.onclick = function docClick() {
    for (const key of Object.keys(menuVisibleFlags)) {
      menuVisibleFlags[key] = false;
    }
  }
</script>

<div class="header">
  {#if title || titleImageUrl}
    <a href="https://google.com" target="_blank" class="title">

      {#if titleImageUrl}
        <img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;" src={titleImageUrl} />
      {/if}
      {#if title}
        <span class="title_text">{title}</span>
      {/if}
    </a>
  {/if}

  <div class="right_menus">
    {#each headerMenus as menu, i}
      <button class="menu_button" id={formatName(menu.title + "_button")} onclick={(e) => menuClick(e, menu.title)}>
        <img class="menu_icon" class:round={menu.imageShape==="round"} alt={menu.title} src={menu.imageUrl} bind:this={menuButtons[formatName(menu.title + "_button")]} /></button>

      {#if menuVisibleFlags[menu.title]}
        <DropDown menuItems={menu.items} position={getMenuPosition(formatName(menu.title + "_button"))}></DropDown>
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
    color: #111;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .title:link { text-decoration: none; }
  .title:visited { text-decoration: none; color: #222;}
  .title:hover { text-decoration: none; color: darkgray}
  .title:active { text-decoration: none; }


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
    height: 30px;
    width: 30px;
    object-fit: cover;
  }

  .menu_icon:hover {
    cursor: pointer;
  }

  .round {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
</style>