<svelte:options customElement="ing-buffet" />

<script lang="ts">
  import { fade, slide, fly, blur, scale } from 'svelte/transition';
  import IngHeaderLite from "./IngHeaderLite.wc.svelte";
  import { linear } from 'svelte/easing';

  let {
    title = "Mapp",
    icon = "",
    searchicon = "",
    notificationicon = "",
    supportuser = true,
    username = "",
    userpic = "",
    activeitem = "",
    menuconfig = undefined
  } = $props();

  if (typeof(menuconfig) == "string") {
    menuconfig = JSON.parse(menuconfig);
  }

  let expandstate: {[key: string]: boolean} = $state({});

  if (activeitem) expandstate[activeitem] = true;

  let itemClick = (itemName: string) => {
    if (!expandstate[itemName])
      expandstate[itemName] = true;
    else
      expandstate[itemName] = !expandstate[itemName];
  };
</script>

<div class="outer_frame">
  <div class="left_menu" >
    <div class="menu_frame">
      {#each menuconfig.items as item, i}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href={item.url} class={item.title == activeitem ? "menu_item menu_item_active": "menu_item"} onclick={() => itemClick(item.title)}>
          <span>
            <span class="menu_item_icon">
              {#if item.icon}
                <img src={item.icon} alt="option" width="18px" />
              {:else}
                <svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>
              {/if}
            </span>
            <span class="menu_item_text">
              {item.title}
            </span>

            {#if item.subitems}
              <span class={expandstate[item.title] ? "menu_item_expand expanded" : "menu_item_expand"}>
                <svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              </span>
            {/if}
          </span>
        </a>

        {#if expandstate[item.title] && item.subitems}
          <div class="menu_item_frame" transition:slide={{duration: 300, easing: linear}}>


            {#each item.subitems as subitem, i}
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <a href={subitem.url} class={subitem.title == activeitem ? "menu_item menu_item_active": "menu_item"} onclick={() => itemClick(subitem.title)}>
                <span>
                  <span class="menu_item_icon"></span>
                  <span class="menu_item_text">
                    {subitem.title}
                  </span>
                </span>
              </a>
            {/each}
          </div>
        {/if}

      {/each}
    </div>
  </div>
  <div class="right_panel">
    <IngHeaderLite {searchicon} {notificationicon} supportuser={supportuser} username={username} userpic={userpic}></IngHeaderLite>
    <div class="right_panel_content">
      <slot />
    </div>
  </div>
</div>

<style>
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: #eaedf2;
  }

  a:hover {
    text-decoration: none;
    color: #eaedf2;
  }

  a:active {
    text-decoration: none;
  }
  
  .outer_frame {
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    height: 100vh;
    width: 100vw;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .left_menu {
    display: flex;
    flex-flow: row nowrap;
    width: 260px !important;
    min-width: 260px;
    height: 100%;
    background-color: #262b40 !important;
    color: #eaedf2;
  }
  
  .menu_frame {
    margin: 20px 30px 20px 30px;
    width: 100%;
  }
  
  .menu_item {
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px 0px;
    color: #eaedf2;
    border-radius: .5rem;
    margin-bottom: 8px;
    border: .0625rem solid transparent;
  }

  .menu_item:hover {
    background-color: #2e3650;
  }

  .menu_item_active {
    background-color: #2e3650;
    border: .0625rem solid #4c5680;
  }

  .menu_item_icon {
    display: inline-block;
    margin-left: 12px;
    margin-right: .5rem;
    color: #fff;
    position: relative;
    top: 3px;
    width: 18px;
  }

  .menu_item_expand {
    float: right;
    width: 22px;
  }

  .expanded {
    position: relative;
    /* left: -4px; */
    /* top: -2px; */
    transform: rotate(90deg) translateX(-2px) translateY(4px);
    transition: all 0.2s ease;
  }

  .menu_item_frame {
    width: 100%;
  }

  .right_panel {
    color: #4a5073;
    background-color: #f5f8fb;
    flex: auto;
    height: 100%;
    overflow-y: auto;
  }

  .right_panel_content {
    padding: 0px 20px;
  }
</style>
