<script module>
  import './mountainview.css';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ElegantBuffet from '$lib/mountainview/ElegantBuffet.wc.svelte';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MountainView/ElegantBuffet',
    component: ElegantBuffet,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
      type: {
        control: { type: 'select' },
        options: ['primary', 'secondary'],
      },
    },
    args: {
      onClick: fn(),
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ title: "CommonSky", logoUrl: 'https://www.svgrepo.com/show/504880/sky-children-of-the-light.svg', rightMenus: [
  {
    title: "User menu",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    imageShape: "round",
    items: [
      {
        title: "Log out",
        url: "https://google.com"
      },
      {
        title: "Account",
        url: "https://google.com"
      }
    ]
  },  {
    title: "Site menu",
    imageUrl: "https://www.svgrepo.com/show/514293/windows.svg",
    items: [
      {
        title: "Log out",
        url: "https://google.com"
      },
      {
        title: "Account",
        url: "https://google.com"
      }
    ]
  }]}}>
</Story>

<style>

</style>