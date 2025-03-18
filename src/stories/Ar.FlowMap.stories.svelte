<script module lang="ts">
  import './style.css';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FlowMap from '$lib/armonk/FlowMap.svelte';

  const { Story } = defineMeta({
    title: 'Stories/Armonk/FlowMap',
    component: FlowMap,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
  });
</script>

<Story name="Basic"></Story>

