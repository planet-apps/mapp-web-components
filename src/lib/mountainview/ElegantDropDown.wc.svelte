<svelte:options customElement="mv-elegant-dropdown" />

<script lang="ts">

  let {
    position={},
    menuItems=[]
  }: {
    position: {
      top?: string,
      left?: string
    },
    menuItems: {
      title: string,
      url?: string,
      event?: string
    }[]
  } = $props();
  
  function sendEvent(name: string | undefined) {
    if ($host() && name) {
      // dispatch document event for easy client reading
      document.dispatchEvent(
        new CustomEvent(name, {
          detail: {},
        }),
      );
    }
  }

</script>

<div class="menu_frame" style={`top: ${position.top}; left: ${position.left};`}>
  <div class="arrow"></div>
  <div class="menu">
    {#each menuItems as item}
      <div class="menu_item">
        {#if item.url}
          <a href={item.url}>{item.title}</a>
        {:else}
          <button class="menu_item_button" onclick={()=>sendEvent(item.event)}>{item.title}</button>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
.menu_frame {
  position: fixed;
  top: "57px";
  left: calc(100vw-24);
  min-width: 200px;
  min-height: 200px;
  max-width: 180px;
  background: #fff;
  box-shadow: #00000026 0 2px 10px;
  border: 1px solid rgb(242, 242, 242);
  z-index: 6;
}

.arrow {
  position: relative;
  top: -31px;
  left: 163px;
  border: 1px solid rgb(242, 242, 242);
  box-shadow: #00000026 -1px -1px 1px -1px;
  transform: rotate(45deg) translate(16px, 16px);
  background: #fff;
  height: 14px;
  width: 14px;
  display: block;
  content: "";
  pointer-events: none;
  z-index: 1;
}

.menu {
  position: relative;
  top: -16px;
  background: #fff;
  min-height: 140px;
  z-index: 2;
  padding: 14px;
}

.menu_item {
  height: 14px;
  width: 100%;
  font-size: 18px;
  padding-bottom: 12px;
  color: gray;
}

.menu_item a:link { text-decoration: none; color: gray; }
.menu_item a:visited { text-decoration: none; color: #222;}
.menu_item a:hover { text-decoration: none; color: darkgray}
.menu_item a:active { text-decoration: none; }

.menu_item_button {
  background-color: transparent;
  border: 0px;
  font-size: 16px;
}

.menu_item_button:hover {
  color: gray;
  cursor: pointer;
}

</style>