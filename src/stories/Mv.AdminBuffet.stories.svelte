<script module lang="ts">
  import './style.css';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AdminBuffet from '$lib/mountainview/AdminBuffet.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MountainView/AdminBuffet',
    component: AdminBuffet,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      title: "BikeTrips",
      titleImageUrl: "/favicon.png",
      menuTitle: "Admin",
      menuImageUrl: "/favicon.png",
      menuWidth: "240px",
      menuItems: [
        {
          title: "Users",
          imageUrl: "/bell.svg",
          link: "https://google.com"
        },
        {
          title: "Products",
          imageUrl: "/bell.svg",
          link: "https://google.com"
        },
        {
          title: "Rates",
          imageUrl: "/bell.svg",
          link: "https://google.com"
        }
      ],
      selectedFeature: "Users",
      showBackButton: false
    }
  });

</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Content"></Story>

<Story name="ContentDetail" args={{showBackButton: true}}></Story>


<style>

</style>