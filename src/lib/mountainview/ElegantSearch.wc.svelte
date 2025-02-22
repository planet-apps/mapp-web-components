<svelte:options customElement="mountainview-elegant-search" />

<script lang="ts">

  let { input = $bindable(), onInput } = $props();

  function oninput(e:any) {
    if (onInput) {
      onInput(input);
    }
  }
</script>

<div class="input_frame">
  <div class="search_frame">
    <div class="search_icon">
      <svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
    </div>
    <input class="search_input" {oninput} bind:value={input} />
  </div>
</div>

<style>
  .input_frame {
    min-height: 44px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: 0px 2px 8px 0px rgba(60, 64, 67, 0.25);
    border-radius: 24px;
    margin: 0 auto;
    max-width: 584px;
  }

  .search_frame {
    display: flex;
    flex: 1;
    padding: 0 8px 0 0;
  }

  .search_icon {
    display: flex;
    align-items:center;
    padding-right: 13px;
    padding-left: 14px;
    height: 46px;
    color: #9aa0a6;
  }

  .search_input {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    border: none;
    border-radius: 24px;
    font-size: 18px;
  }
</style>