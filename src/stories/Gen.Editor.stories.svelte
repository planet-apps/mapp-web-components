<script module>
  import './style.css';
  import { defineMeta } from "@storybook/addon-svelte-csf";
  // import GenEditor from "../lib/geneva/GenEditor.wc.svelte";
  import GenEditor from "../lib/geneva/GenEditorNew.wc.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/Geneva/GenEditor",
    component: GenEditor,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: fn(),
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Simple options">
  <GenEditor />
</Story>

<style>
  div {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
