<svelte:options customElement="mv-admin-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import AdminMenu from "./AdminMenu.wc.svelte";
  import AdminContent from "./AdminContent.wc.svelte";
  
  let {
    title="",
    titleImageUrl="",
    menuTitle="",
    menuImageUrl="",
    menuWidth="240px",
    menuItems=[],
    selectedFeature="",
    showBackButton=false
  }: {
    title: string,
    titleImageUrl: string,
    menuTitle: string,
    menuImageUrl: string,
    menuWidth: string,
    menuItems: {
      title: string,
      imageUrl: string,
      link: string
    }[],
    selectedFeature: string,
    showBackButton: boolean,
  } = $props();
</script>

<div style="display: flex; flex-flow: column; width: 100vw; height: 100vh;">

  <ElegantHeader {title} {titleImageUrl} />

  <div style="display: flex; flex-flow: row; width: 100%;">
    <AdminMenu {menuTitle} {menuImageUrl} {menuWidth} {menuItems} {selectedFeature} />
    <AdminContent {selectedFeature} {showBackButton} />
  </div>
</div>




<style>

</style>