<svelte:options customElement="ar-flow-map" />

<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,

    Position

  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  const nodes = writable([
    {
      id: "source",
      type: "group",
      position: {x: 0, y: 0},
      style: 'width: 170px; height: 140px;'
    },
    {
      id: '1',
      type: 'input',
      data: { label: 'Part ID' },
      position: { x: 0, y: 0 },
      sourcePosition: Position.Right,
      parentId: "source"
    },
    {
      id: 'destination',
      type: 'group',
      position: { x: 200, y: 0 },
      style: 'width: 170px; height: 140px;'
    },
    {
      id: '2',
      type: 'output',
      data: { label: 'Part ID' },
      position: { x: 0, y: 0 },
      targetPosition: Position.Left,
      parentId: "destination"
    },
  ]);
 
  // same for edges
  const edges = writable([
    {
      id: '1-2',
      type: 'default',
      source: '1',
      target: '2',
      label: 'Mapping'
    }
  ]);
 
  const snapGrid = [25, 25];
</script>

<div style:height="500px">
  <SvelteFlow
    {nodes}
    {edges}
    {snapGrid}
    proOptions={{hideAttribution: true}}
    fitView
    on:nodeclick={(event) => console.log('on node click', event.detail.node)}
  >
    <Controls />
    <Background variant={BackgroundVariant.Lines} />
    <MiniMap />
  </SvelteFlow>
</div>