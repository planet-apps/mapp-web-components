<svelte:options customElement="mv-elegant-spinner" />

<script lang="ts">

  let {} = $props();

</script>

<div class="lds-ring"><div></div><div></div><div></div><div></div></div>

<style>
.lds-ring {
  /* display: inline-block;
  position: relative; */

  display: inline-block;
  position: absolute;
  width: 99%;
  text-align: center;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  position:absolute;
  left: 48%;
  top: 42%;
  width: 32px;
  height: 32px;
  margin: 8px;
  border: 4px solid #3367d6;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #3367d6 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}

</style>