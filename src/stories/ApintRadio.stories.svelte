<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ApintRadio from "../lib/ApintRadio.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/ApintRadio",
    component: ApintRadio,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: fn(),
    },
  });

  let radio1 = $state("check1");
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Simple options">
  <div>Radio value: {radio1}</div>

  <ApintRadio
    name="simpleRadio"
    options={[
      { label: "Option 1", value: "check1" },
      { label: "Option 2", value: "check2" },
      { label: "Option 3", value: "check3" },
    ]}
    bind:value={radio1}
  />
</Story>

<style>
  div {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
