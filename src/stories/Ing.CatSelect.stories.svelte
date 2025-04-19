<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import IngCatSelect from "../lib/ingolstadt/IngCatSelect.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/Ingolstadt/IngCatSelect",
    component: IngCatSelect,
    tags: ["autodocs"],
    argTypes: {},
  });
</script>

<Story
  name="IngCatSelect Simple"
  args={{
    linkPrefix: "https://google.com/",
    linkColumnName: "Id",
    headers: ["Id", "Created by", "Total", "Status"],
    categories: {
      "Orders A":
      [
        {
          Id: "1234",
          "Created by": "TYLER",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1235",
          "Created by": "LARRY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1236",
          "Created by": "JIM",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1237",
          "Created by": "LARRY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1238",
          "Created by": "SERGEY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
      ],
      "Orders B":
      [
        {
          Id: "1234",
          "Created by": "TYLER",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1235",
          "Created by": "LARRY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1236",
          "Created by": "JIM",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1237",
          "Created by": "LARRY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
        {
          Id: "1238",
          "Created by": "SERGEY",
          Total: "123.00",
          Status: "FULFILLMENT",
        },
      ]
    }
  }}
></Story>
