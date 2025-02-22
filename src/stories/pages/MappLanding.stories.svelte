<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MappLanding from '$lib/MappLanding.wc.svelte';

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MappLanding',
    component: MappLanding,
    tags: ['autodocs'],
    argTypes: {}
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Landing 1" args={{ }}></Story>