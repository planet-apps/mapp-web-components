<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import IngProps from "../lib/ingolstadt/IngProps.wc.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/ingolstadt/IngProps",
    component: IngProps,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: fn(),
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Props">
  <IngProps />
</Story>

<style>
  div {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
