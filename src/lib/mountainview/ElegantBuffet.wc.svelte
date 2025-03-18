<svelte:options customElement="mv-elegant-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import ElegantHeroSearch from './ElegantHeroSearch.wc.svelte';
  import ElegantPageCard from "./ElegantPageCard.wc.svelte";
  import ElegantFilterCategories from "./ElegantFilterCategories.wc.svelte";
  import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
  import ElegantTable from "./ElegantTable.wc.svelte";

  let {
    title="",
    titleImageUrl="",
    headerMenus=[],
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
    titleImageUrl: string,
    headerMenus: {
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

  let view = $state("CARD");
  let tableHeaders:{name: string, displayName: string, searchable: boolean}[] = $state([
    { name: "dateTime", displayName: "Date", searchable: false},
    { name: "authorName", displayName: "Author", searchable: true},
    { name: "title", displayName: "Title", searchable: true}]);

</script>

<ElegantHeader {title} {titleImageUrl} {headerMenus}></ElegantHeader>

<ElegantHeroSearch {title} {titleImageUrl} bind:searchtext {searchloadresults} {searchsubmit} />

<ElegantFilterCategories {categories} {categoryselect} />

<ElegantFilterTypes {types} {sorts} {typeselect} {sortselect} bind:view />

{#if view === "CARD"}
  <ElegantPageCard {items}/>
{:else}
  <ElegantTable {tableHeaders} tableRows={items} linkprefix="" linkcolumnname="link" update={undefined} />
{/if}

<style>

</style>