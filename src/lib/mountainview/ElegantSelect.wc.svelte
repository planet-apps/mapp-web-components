<svelte:options customElement="mv-elegant-select" />

<script lang="ts">

  let { input = $bindable(), onInput, options=[] } = $props();

  function oninput(e:any) {
    if (e.srcElement) input=e.srcElement.value;
    if (onInput) {
      onInput(input);
    }
  }
</script>

<div class="select">
  <select
    name="source"
    id="source"
    bind:value={input}
    {oninput}
>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
  </select>
</div>

<style>
.select,
.select * {
	margin: 0;
	padding: 0;
	position: relative;
	box-sizing: border-box;
}

.select {
	position: relative;
	background-color: #f0f0f0;
	border-radius: 12px;
  width: 200px;
  height: 40px;
}

.select select {
	font-size: 1rem;
	font-weight: normal;
	width: 100%;
	padding: 10px 24px 8px 10px;
	border: none;
	background-color: transparent;
	appearance: none;
}

.select select:active, .select select:focus {
	outline: none;
	box-shadow: none;
}

.select:after {
	content: "";
	position: absolute;
	top: 50%;
	right: 8px;
	width: 0;
	height: 0;
	margin-top: -2px;
	border-top: 5px solid #aaa;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
}
</style>