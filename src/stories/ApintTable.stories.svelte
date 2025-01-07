<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ApintTable from '../lib/ApintTable.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/ApintTable',
    component: ApintTable,
    tags: ['autodocs'],
    argTypes: {}
  });
</script>

<Story name="Table simple" args={{linkPrefix: "https://google.com/", linkColumnName: "Id", headers: ["Id", "Created by", "Total", "Status"], rows: [
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}]}}></Story>