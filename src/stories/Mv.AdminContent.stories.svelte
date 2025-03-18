<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AdminContent from '$lib/mountainview/AdminContent.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MountainView/AdminContent',
    component: AdminContent,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      title: "Users",
      showbackbutton: false,
    }
  });

</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Content"></Story>

<Story name="ContentDetail" args={{showBackButton: true}}></Story>


<style>

</style>