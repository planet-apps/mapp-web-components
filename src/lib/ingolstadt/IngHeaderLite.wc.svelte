
<svelte:options customElement="ing-headerlite" />

<script>
  import IngInput from "./IngInput.wc.svelte";

  const { title = "Apint.org", searchicon = "", notificationicon = "", supportuser = false, username = "", userpic = ""} = $props();
  let searchInput = "";
</script>

<div class="header">
  <div style="width: 364px;" >
    <IngInput icon={searchicon} placeholder="Search" input={searchInput}></IngInput>
    <span>{searchInput}</span>
  </div>
  <div>
    {#if supportuser}
      <span class="user_button">
        {#if notificationicon}
          <img class="msg_icon" alt="alerts" src={notificationicon} />
          <span class="msg_new"></span>
        {/if}
        <img class="user_icon" alt="profile" src={userpic} />
        <span class="user_name">{username}</span>
      </span>
    {:else if supportuser}
      <span></span>
    {/if}
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 20px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .msg_icon {
    width: 20px;
    margin-right: 22px;
  }

  .msg_new {
    background-color: red;
    height: 7px;
    width: 7px;
    border-radius: 50% !important;
    position: relative;
    top: 4px;
    left: -22px;
  }

  .user_button {
    display: flex;
    position: relative;
    top: -6px;

  }

  .user_button:hover {
    cursor: pointer;
  }

  .user_name {
    padding-top: 12px;
    padding-left: 8px;
  }

  .user_icon {
    border-radius: 50% !important;
    width: 40px;
  }
</style>