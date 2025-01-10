<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MappTable from '../lib/MappTable.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MappTable',
    component: MappTable,
    tags: ['autodocs'],
    argTypes: {}
  });
</script>

<Story name="Table simple" args={{linkprefix: "https://google.com/", linkcolumnname: "Id", headers: ["Id", "Created by", "Total", "Status"], rows: [
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}, 
  { "Id": "1234", "Created by": "TYLER", "Total": "123.00", "Status": "FULFILLMENT"}]}}></Story>

<Story name="Table empty" args={{ headers: ["Id", "Created by", "Total", "Status"]}}></Story>
