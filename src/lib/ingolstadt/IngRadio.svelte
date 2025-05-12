<svelte:options customElement="ing-radio" />

<script lang="ts">
  let {
    name = "radio1",
    options = [],
    value = $bindable(""),
  }: {
    name: string;
    options: { label: string; value: string }[];
    value: string;
  } = $props();

  const onchange = (e) => {
    value = e.target.id;
    $host().dispatchEvent(
      new CustomEvent("update", {
        detail: {
          checked: true,
        },
      }),
    );
  };
</script>

<fieldset>
  {#each options as option, i}
    <div>
      <input
        type="radio"
        id={option.value}
        {name}
        value={option.value}
        checked={option.value === value ? true : false}
        {onchange}
      />
      <label for={option.value}>{option.label}</label>
    </div>
  {/each}
</fieldset>

<style>
  fieldset {
    border-width: 0px;
  }

  input {
    width: 1.125em;
    height: 1.125em;
    margin-top: 0.1875em;
    vertical-align: top;
    background-color: #f2f4f6;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid #d1d5db;
    -webkit-appearance: none;
    appearance: none;
    transition:
      background-color 0.2s ease-in-out,
      background-position 0.2s ease-in-out,
      border-color 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
    border-radius: 50%;
  }

  input:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23ffffff'/%3e%3c/svg%3e");
    background-color: #1f2937;
    border-color: #1f2937;
  }

  label {
    font-weight: 500;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
