<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MappButton from '../lib/MappButton.wc.svelte';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MappButton',
    component: MappButton,
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
<Story name="Primary" args={{ type: "primary", label: 'Button' }}></Story>

<Story name="Secondary" args={{ type: "secondary", label: 'Button' }} />
