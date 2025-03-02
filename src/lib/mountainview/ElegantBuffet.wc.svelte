<svelte:options customElement="mountainview-elegant-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import ElegantHeroSearch from './ElegantHeroSearch.wc.svelte';
  import ElegantPageCard from "./ElegantPageCard.wc.svelte";
  import ElegantFilterCategories from "./ElegantFilterCategories.wc.svelte";
  import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
  import ElegantTable from "./ElegantTable.wc.svelte";

  let {
    title="",
    logoUrl="",
    menus=[],
    search="",
    onSearch=undefined,
    categories=[],
    onCategorySelect=undefined,
    types=[],
    onTypeSelect=undefined,
    sorts=[],
    onSortSelect=undefined,
    items=[]
  } = $props();

  let view = $state("CARD");
  let headers:string[] = $state(["dateTime", "authorName", "title"]);

  

</script>

<ElegantHeader {title} {logoUrl} {menus}></ElegantHeader>

<ElegantHeroSearch {logoUrl} bind:search={search} {onSearch} />

<ElegantFilterCategories {categories} {onCategorySelect} />

<ElegantFilterTypes {types} {sorts} {onTypeSelect} {onSortSelect} bind:view={view} />

{#if view === "CARD"}
  <ElegantPageCard {items}/>
{:else}
  <ElegantTable {headers} headerssearchable={headers} rows={items} />
{/if}

<style>

</style>