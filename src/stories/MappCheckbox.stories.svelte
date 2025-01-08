<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MappCheckbox from '../lib/MappCheckbox.svelte';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MappCheckbox',
    component: MappCheckbox,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      onClick: fn(),
    }
  });

  let checked1 = $state(true);
  let checked2 = $state(false);
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Checked">
  <div>Checked status: {checked1}</div>
  <br>
  <MappCheckbox label="Checkbox" name="check1" bind:checked={checked1} />
</Story>

<Story name="Unchecked">
  <div>Checked status: {checked2}</div>

  <MappCheckbox label="Checkbox" name="check2" bind:checked={checked2} />
</Story>

<style>
  div {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
</style>