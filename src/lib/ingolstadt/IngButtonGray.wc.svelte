
<svelte:options customElement="ing-button-gray" />

<script>
  const { type = "primary", size = 'medium', label = 'Button', onClick = undefined } = $props();
</script>

<button type="button" class={"button button--" + size} onclick={onClick}>
  <slot />
</button>

<style>
  .button {
    cursor: pointer;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #fff;
    background-color: #1f2937;
    border-color: #1f2937;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: .0625rem solid transparent;
    padding: .5rem 1rem;
    font-size: .875rem 14px;
    border-radius: .5rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .button:focus {
    color: #fff;
    background-color: #2f3745;
    border-color: #2c3441;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);
  }

  .button:hover {
    color: #fff;
    background-color: #1a232f;
    border-color: #19212c;
  }

  .button--small {
    padding: 10px 16px;
    font-size: 14px;
  }
  .button--medium {
    padding: 11px 20px;
    font-size: 14px;
  }
  .button--large {
    padding: 12px 24px;
    font-size: 16px;
  }
</style>