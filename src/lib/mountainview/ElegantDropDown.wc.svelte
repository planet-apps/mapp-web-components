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
      url: string
    }[]
  } = $props();
  
</script>

<div class="menu_frame" style={`top: ${position.top}; left: ${position.left};`}>
  <div class="arrow"></div>
  <div class="menu">
    {#each menuItems as item}
      <div class="menu_item">
        <a href="https://google.com" target="_blank">{item.title}</a>
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
}
</style>