<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ElegantTable from "$lib/mountainview/ElegantTable.wc.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/MountainView/ElegantTable",
    component: ElegantTable,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: fn(),
      tableRows: [{"test1": "test1", "test2": "test2", "test3": "test3"},
        {"test1": "test1", "test2": "test2", "test3": "test3"},
        {"test1": "test1", "test2": "test2", "test3": "test3"},
        {"test1": "test1", "test2": "test2", "test3": "test3"},
        {"test1": "test1", "test2": "test2", "test3": "test3"}
      ]
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Simple table" args={{}}>

</Story>
