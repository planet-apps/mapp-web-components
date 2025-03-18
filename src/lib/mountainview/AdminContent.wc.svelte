<svelte:options customElement="mv-admin-content" />

<script lang="ts">
  let {
    selectedFeature="",
    showBackButton=false
  }: {
    selectedFeature: string,
    showBackButton: boolean,
  } = $props();
</script>

<div class="frame">
  <div class="header">
    {#if showBackButton}
      <button>back</button>
    {/if}
    <span class="title">{selectedFeature}</span>
  </div>
  <div class="content">
    hello world!
  </div>
</div>

<style>

  .frame {
    display: flex;
    flex-flow: column;
    width: 100%;
  }

  .header {
    height: 45px;
    border-bottom: solid 2px rgba(242,242,242,1);
    display: flex;
    align-items: center;
    width: 100%;
  }

  .title {
    position: relative;
    left: 10px;
    font-size: large;
  }

 .content {
    padding: 10px;
 }
</style>