
<svelte:options customElement="mapp-checkbox" />

<script lang="ts">
  let { label = 'Checkbox', name = "check1", checked = $bindable(false) } = $props();

  const onchange = () => {
    $host().dispatchEvent(new CustomEvent("update", {detail: {
      checked: checked
    }}));
  }
</script>

<div>
  <input type="checkbox" id={name} name={name} bind:checked={checked} onchange={onchange} />
  <label for={name}>{label}</label>
</div>

<style>
input {
  width: 1.125em;
  height: 1.125em;
  margin-top: 0.1875em;
  vertical-align: top;
  background-color: #F2F4F6;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #D1D5DB;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 0.2s ease-in-out, background-position 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 0.25em;
}

input:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  background-color: #1F2937;
  border-color: #1F2937;
}

label {
  font-weight: 500;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>