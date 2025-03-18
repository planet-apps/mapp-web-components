<svelte:options customElement="mv-elegant-cardpage" />

<script lang="ts">
import { fade, slide, fly, blur, scale } from 'svelte/transition';
import { linear } from 'svelte/easing';
import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
import ElegantCard from "./ElegantCard.wc.svelte";

let {items} = $props();

if (typeof(items) == "string") {
  items = JSON.parse(items);
}
</script>

<div class="menu_frame">

  {#each items as item}
    <ElegantCard {item}/>
  {/each}

</div>

<style>
  .menu_frame {
    max-width: 2000px;
    margin: 0px auto;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
  }
</style>