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
    searchtext="",
    searchloadresults,
    searchsubmit,
    categories=[],
    categoryselect,
    types=[],
    typeselect,
    sorts=[],
    sortselect,
    items
  }:
  {
    title: string,
    logoUrl: string,
    menus: {
      title: string,
      imageUrl: string,
      imageShape: string,
      items: {
        title: string,
        url: string
      }[]
    }[],
    searchtext?: string,
    searchloadresults?: (text: string) => string[],
    searchsubmit: (text: string) => void,
    categories: {
      name: string,
      letter: string
    }[],
    categoryselect: (categoryState: {[key: string]: boolean}) => void,
    types: {
      name: string,
      icon: string
    }[],
    typeselect: (typeState: {[key: string]: boolean}) => void,
    sorts: string[],
    sortselect: (sort: string) => void,
    items: {
      title: string,
      dateTime: string,
      imageUrl: string,
      authorName: string,
      authorUrl: string,
      authorImageUrl: string,
      description: string,
      link: string,
      categories: {
        name: string,
        imageUrl: string
      }[],
      types: {
        name: string,
        imageUrl: string
      }[]
    }[]
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

<ElegantHeroSearch {title} {logoUrl} bind:searchtext {searchloadresults} {searchsubmit} />

<ElegantFilterCategories {categories} {categoryselect} />

<ElegantFilterTypes {types} {sorts} {typeselect} {sortselect} bind:view />

{#if view === "CARD"}
  <ElegantPageCard {items}/>
{:else}
  <ElegantTable {headers} rows={items} linkprefix="" linkcolumnname="link" update={undefined} />
{/if}

<style>

</style>