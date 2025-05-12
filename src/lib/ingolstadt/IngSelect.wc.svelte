<svelte:options customElement="ing-select" />

<script lang="ts">
  let {
    label = "",
    icon = "",
    placeholder = "",
    items = "",
    input = $bindable(""),
    selectStyle=""
  }: {
    label: string,
    icon?: string,
    placeholder?: string,
    items: string,
    input?: string,
    selectStyle?: string
  } = $props();

  let realItems: string[] = items.split(",");

  const inputChanged = (e: any) => {
    if (e && e.target && $host()) {
      let inputValue = "";
      if (e.target.value) inputValue = e.target.value;

      // set inner value for web components
      $host().innerText = inputValue;

      // dispatch document event for easy client reading
      document.dispatchEvent(
        new CustomEvent("InputChangedEvent", {
          detail: {
            id: $host().id,
            input: inputValue,
          },
        }),
      );

      // dispatch local element event, maybe also useful
      $host().dispatchEvent(new CustomEvent("inputchanged", {detail: {
        input: inputValue
      }}));
    }
  };
</script>

<div style={selectStyle} class="input_frame">
  {#if label}
    <div class="input_label">
      {label}
    </div>
  {/if}
  <div class="input_box">
    {#if icon}
      <span class="input_icon">
        <img width="16px" src={icon} alt="" />
      </span>
    {/if}

    <select class="input_field" {placeholder} bind:value={input} oninput={(e) => {inputChanged(e)}}>
      {#each realItems as item}
        <option>{item}</option>
      {/each}
    </select>
  </div>
</div>

<style>
  .input_frame {
    padding-right: 24px;
    margin-bottom: 14px;
    width: 280px;
  }

  .input_label {
    margin-bottom: 6px;
  }

  .input_box {
    display: flex;
    color: #4a5073;
    background-color: #fff;
    border: 0.0625rem solid #d1d7e0;
    border-radius: 0.5rem;
  }

  .input_icon {
    width: 32px;
    position: relative;
    top: 12px;
    left: 9px;
  }

  .input_field {
    box-shadow: none;
    width: 280px;
    border: 0.0625rem solid #d1d7e0;
    color: #66799e;
    background-color: #fff;
    background-clip: padding-box;
    appearance: none;
    border: transparent;
    height: 40px;
    font-size: 16px;
    border-style: none;
    border-radius: 0.5rem;
    margin-left: 4px;
    margin-right: 8px;
  }

  .input_field:focus {
    outline: none;
  }
</style>
