<svelte:options customElement="mountainview-elegant-menupage" />

<script lang="ts">
import { fade, slide, fly, blur, scale } from 'svelte/transition';
import { linear } from 'svelte/easing';
import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
import ElegantCard from "./ElegantCard.wc.svelte";

let {cards} = $props();

</script>

<div class="menu_frame">

  {#each cards as card}
    <ElegantCard {card}/>
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