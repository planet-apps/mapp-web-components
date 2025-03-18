<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AdminMenu from '$lib/mountainview/AdminMenu.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MountainView/AdminMenu',
    component: AdminMenu,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      title: "Admin",
      imageurl: "https://www.svgrepo.com/show/501438/admin.svg",
      selected: "Users",
      items: [
        {
          title: "Users",
          imageUrl: "https://www.svgrepo.com/show/447468/products.svg",
          link: "https://google.com"
        },
        {
          title: "Products",
          imageUrl: "https://www.svgrepo.com/show/447468/products.svg",
          link: "https://google.com"
        },
        {
          title: "Rates",
          imageUrl: "https://www.svgrepo.com/show/447468/products.svg",
          link: "https://google.com"
        }
      ]
    }
  });

</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Menu"></Story>

<style>

</style>