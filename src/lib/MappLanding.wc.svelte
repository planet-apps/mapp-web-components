<svelte:options customElement="mapp-landing" />

<script lang="ts">
  import { fade, slide, fly, blur, scale } from 'svelte/transition';
  import MappHeaderLite from "./MappHeaderLite.wc.svelte";
  import Logo from "$lib/assets/logo.svelte";
  import { linear } from 'svelte/easing';

  let {
    title = "Mapp",
    icon = "",
    searchicon = "",
    supportuser = true,
    username = "",
    userpic = "",
    activeitem = "",
    menuconfig = undefined
  } = $props();

  if (typeof(menuconfig) == "string") {
    menuconfig = JSON.parse(menuconfig);
  }

</script>

<div class="page_outer">
  <header class="header">
    <div class="header_inner">
      <div class="header_logo">
        <Logo />
      </div>

      <ul class="header_menu">
        <li>Docs</li>
        <li>Ecosystem</li>
      </ul>
    </div>
  </header>

  <div class="content">

  </div>
</div>

<style>
  .page_outer {
    height: 100vh;
    padding: 0px;
    margin: 0px;
    overflow: auto;
    background-color: rgba(21, 25, 52, 1);
  }

  .header {
    background: transparent !important;
    color: white;
  }

  .header_inner {
    display: flex;
    align-items: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 80px;
  }

  .header_logo {
    padding-left: 1rem;
    display: flex;
    align-items: center;
    height: 80px;
  }

  .header_menu {
    height: 100%;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0px;
    flex-grow: 1;
  }

  .header_menu li {
    font-size: 14px;
    font-weight: 500;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: right;
  }

  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-left: calc(50% - 50vw);

  }



  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: #eaedf2;
  }

  a:hover {
    text-decoration: none;
    color: #eaedf2;
  }

  a:active {
    text-decoration: none;
  }
</style>
