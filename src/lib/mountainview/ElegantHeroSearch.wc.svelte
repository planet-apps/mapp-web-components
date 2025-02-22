<svelte:options customElement="mountainview-elegant-hero-search" />

<script lang="ts">
  import ElegantSearch from "./ElegantSearch.wc.svelte";

  let { height="80px", input = $bindable(), onInput } = $props();

</script>

<div class="hero">
  <div class="hero_logo" style={`height: ${height};`}>
    <img height={`${height}`} alt="logo" src="https://www.shutterstock.com/image-vector/vector-cat-face-minimalist-adorable-600nw-2426797721.jpg" />
    <div class="hero_logo_text">CommonSky</div>
  </div>

  <div class="hero_search">
    <ElegantSearch bind:input={input} {onInput} />
  </div>

</div>

<style>
  .hero {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .hero_logo {
    display: flex;
    margin-top: 150px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .hero_logo_text {
    padding-left: 12px;
  }

  .hero_search {
    width: 400px;
  }

</style>