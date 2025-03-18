<svelte:options customElement="mv-admin-menu" />

<script lang="ts">
  let {
    menuTitle="",
    menuImageUrl="",
    menuWidth="240px",
    selectedFeature="",
    menuItems=[]
  }: {
    menuTitle: string,
    menuImageUrl: string,
    menuWidth: string,
    selectedFeature: string,
    menuItems: {
      title: string,
      imageUrl: string,
      link: string
    }[]
  } = $props();
</script>

<div class="menu" style={`width: ${menuWidth}`}>
  <div class="header">
    <img class="icon" src={menuImageUrl} alt=""/>
    <span class="title">{menuTitle}</span>
  </div>
  <div class="items">
    {#each menuItems as item}
      <a href={item.link} class="item" class:item_selected={item.title == selectedFeature}>
        <img class="item_icon" class:item_icon_selected={item.title == selectedFeature} src={item.imageUrl} alt="" />
        <span class="item_title" class:item_title_selected={item.title == selectedFeature}>{item.title}</span>
      </a>
    {/each}
  </div>
</div>

<style>
  .menu {
    /* height: 800px; */
    background-color: white;
    overflow-y: auto;
    border-right: solid 2px rgba(242, 242, 242, 1);
  }

  .header {
    height: 45px;
    border-bottom: solid 2px rgba(242,242,242,1);
    display: flex;
    align-items: center;
  }

  .icon {
    position: relative;
    left: 22px;
    height: 28px;
  }

  .title {
    position: relative;
    left: 34px;
    font-size: large;
  }

  .items {
    margin-top: 6px;
    display: flex;
    flex-flow: column;
  }

  .item {
    height: 48px;
    display: flex;
    align-items: center;
  }

  .item:hover {
    cursor: pointer;
    background-color: rgb(230, 230, 230);
    color: black;
  }

  .item_selected {
    background-color: rgba(161, 194, 250, 0.16);
    color: #3367d6;
    border-left: solid 4px #3367d6;
  }

  .item_icon {
    position: relative;
    height: 28px;
    left: 22px;
  }

  .item_icon_selected {
    left: 18px;
  }

  .item_title {
    position: relative;
    left: 34px;
    height: auto;
    color: #333;
  }

  .item_title_selected {
    left: 30px;
    color: #3367d6;
  }
</style>