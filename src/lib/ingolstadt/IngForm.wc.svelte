<svelte:options customElement="ing-form" />

<script lang="ts">
  import IngInput from "./IngInput.wc.svelte";
  import IngSelect from "./IngSelect.wc.svelte";

  let {
    schema,
  }: {
    schema: {
      title: string,
      description: string,
      properties: {[key: string]: {
        type: string,
        format: string,
        length: string,
        placeholder: string,
        description: string,
        value: string
      }}
    };
  } = $props();

  if (typeof(schema) == "string") {
    schema = JSON.parse(schema);
  }

  function submitClick() {
    console.log(JSON.stringify(schema));

    let object: any = {};

    for (const [key, value] of Object.entries(schema.properties)) {
      object[key] = value.value
    }

    document.dispatchEvent(
      new CustomEvent("FormSubmitEvent", {
        detail: {
          schema: schema,
          object: object
        },
      }),
    );
  }
</script>

<div style="display: flex; flex-flow: row wrap;" class="card_frame">
  {#if schema}
    {#each Object.entries(schema.properties) as [key, property]}
      {#if property.format == "header"}
        <div style="width: 100%;">
          <h3>{property.value}</h3>
        </div>
      {:else if property.format == "select"}
        <IngSelect bind:input={property.value} selectStyle={"width: " + property.length + ";"} label={property.description} items={property.value}></IngSelect>
      {:else if property.type == "string"}
        <IngInput
          inputId={key}
          inputStyle={"width: " + property.length + ";"}
          label={property.description}
          type={property.format}
          placeholder={property.placeholder}
          bind:input={property.value}
        ></IngInput>
      {/if}
    {/each}
  {/if}
  <div style="width: 100%; margin: 20px 0px 10px 0px">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ing-button-gray size="small" id="submit-button" type="secondary" onclick={submitClick}
      >Submit</ing-button-gray
    >
  </div>
</div>

<style>
  .card_frame {
    border-color: #eaedf2 !important;
    box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0.0625rem solid rgba(46, 54, 80, 0.125);
    border-radius: 0.5rem;
    padding: 12px 32px;
  }
</style>
