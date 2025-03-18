<svelte:options customElement="mv-elegant-search" />

<script lang="ts">
  let {
    searchtext = $bindable(),
    searchloadresults,
    searchsubmit,
  }: {
    searchtext: string;
    searchloadresults?: (text: string) => string[];
    searchsubmit: (text: string) => void;
  } = $props();

  let results: string[] = $state([]);

  document.addEventListener("SearchResults", (e: CustomEventInit) => {
    if (e.detail.results) results = e.detail.results;
  });

  function oninput(e: any) {
    if (searchloadresults) {
      results = searchloadresults(searchtext);
    }
  }

  function onkeyup(e: KeyboardEvent) {
    if (e.key === "Escape") {
      results = [];
    } else if (e.key === "Enter") {
      if (searchsubmit) {
        searchsubmit(searchtext);
      }

      document.dispatchEvent(
        new CustomEvent("SearchSubmit", {
          detail: {
            text: searchtext,
          },
        }),
      );

      searchtext = "";
    }
  }
</script>

<div class="input_frame">
  <div class="search_frame">
    <div class="search_icon">
      <svg
        width="18px"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          fill="#9aa0a6"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path></svg
      >
    </div>
    <input class="search_input" {oninput} {onkeyup} bind:value={searchtext} />
  </div>
</div>
{#if results.length > 0}
  <div class="results">
    <div class="results_frame">
      <div class="results_list">
        {#each results as result}
          <div class="result">{result}</div>
        {/each}
      </div>
    </div>
  </div>
{/if}

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
    flex-flow: row wrap;
    width: 100%;
    flex: 1;
    padding: 0 8px 0 0;
  }

  .search_icon {
    display: flex;
    align-items: center;
    padding-right: 13px;
    padding-left: 14px;
    height: 46px;
    color: #9aa0a6;
    z-index: 11;
  }

  .search_input {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    border: none;
    border-radius: 24px;
    font-size: 18px;
    width: 100%;
    z-index: 11;
    background-color: transparent;
  }

  .search_input:focus,
  .search_input:focus {
    outline: none;
  }

  .results {
    position: absolute;
    margin: 0px 0px 0px 0px;
    width: 398px;
    border: 1px solid #dfe1e5;
    z-index: 10;
    background: #fff;
    border-radius: 0px 0px 24px 24px;
  }

  .results_list {
    margin-top: 10px;
    background: #fff;
    width: 100%;
    z-index: 10;
  }

  .results_frame {
    position: relative;
    top: -22px;
    background: #fff;
    border-left: 1px solid #dfe1e5;
    border-right: 1px solid #dfe1e5;
    width: 398px;
    left: -1px;
    z-index: 10;
    height: 300px;
    overflow-x: hidden;
  }

  .result {
    width: 100%;
    padding: 4px 0px 4px 16px;
  }

  .result:hover {
    cursor: pointer;
    background-color: #dfe1e5;
  }
</style>
