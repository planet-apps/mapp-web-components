<svelte:options customElement="apint-input" />

<script lang="ts">

  let { 
    label = "", 
    icon = "", 
    type="text", 
    placeholder = "", 
    input =  $bindable(""),
    style = ""
  } = $props();

  const inputChanged = (e: any) => {
    if (e && e.target && e.target.value && $host()) {
      $host().dispatchEvent(new CustomEvent("update", {detail: {
        input: e.target.value
      }}));
    }
  };

</script>

<div style={style} class="input_frame">
  {#if label}
    <div class="input_label">
      {label}
    </div>
  {/if}
  <div class="input_box">
    {#if icon}
      <span class="input_icon">
        <img width="16px" src={icon} alt="in" />
      </span>
    {/if}

    <input class="input_field" {type} {placeholder} bind:value={input} oninput={(e) => {inputChanged(e)}} />
  </div>
</div>

<style>
  .input_frame {
    padding-right: 24px;
    margin-bottom: 14px;
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
    /* padding-right: 14px; */
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
    background-color: transparent;
    background-clip: padding-box;
    appearance: none;
    border: transparent;
    height: 40px;
    font-size: 16px;
    border-style: none;
    border-radius: 0.5rem;
    margin-left: 4px;
    margin-right: 8px;
    width: 98%;
  }

  .input_field:focus {
    outline: none;
  }
</style>
