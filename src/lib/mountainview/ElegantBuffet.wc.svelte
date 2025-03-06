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

  if (typeof(items) == "string") {
    items = JSON.parse(items);
  }

  let view = $state("CARD");
  let headers:{name: string, displayName: string, searchable: boolean}[] = $state([
    { name: "dateTime", displayName: "Date", searchable: false},
    { name: "authorName", displayName: "Author", searchable: true},
    { name: "title", displayName: "Title", searchable: true}]);

</script>

<ElegantHeader {title} {logoUrl} {menus}></ElegantHeader>

<ElegantHeroSearch {title} {logoUrl} bind:search={search} {onSearch} />

<ElegantFilterCategories {categories} {onCategorySelect} />

<ElegantFilterTypes {types} {sorts} {onTypeSelect} {onSortSelect} bind:view={view} />

{#if view === "CARD"}
  <ElegantPageCard {items}/>
{:else}
  <ElegantTable {headers} rows={items} linkprefix="" linkcolumnname="link" update={undefined} />
{/if}

<style>

</style>