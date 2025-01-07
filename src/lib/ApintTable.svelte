<svelte:options customElement={{tag: "apint-table", extend: (customElementConstructor) => {
  return class extends customElementConstructor {
    constructor() {
      super();
      this.component = this;
    }
  };
  }
}}
/>

<script module>
  export class RowClickEvent {

  }
</script>

<script lang="ts">
  const {
    headers = [],
    rows = [],
    linkPrefix = "",
    linkColumnName = "",
    update = undefined,
    component = undefined 
  }: {headers: string[], rows: any, linkPrefix: string, linkColumnName: string, update: undefined | ((e: {detail: {rowIndex: number}}) => void), component: any} = $props();

  const rowClick = (index: number) => {
    if (component) {
      component.dispatchEvent(new CustomEvent("update", {detail: {
        rowIndex: index
      }}));
    }
    else if (update) {
      update({detail: {
        rowIndex: index
      }});
    }
  };
</script>

<div class="card_frame">
  <table>
    <thead>
      <tr>
        {#each headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row, i}
        <tr onclick={() => {rowClick(i)}}>
          {#each Object.entries(row) as col, i}
            <td><a class="table_row" href={linkPrefix + row[linkColumnName]}>{col[1]}</a></td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .card_frame {
    border-color: #eaedf2 !important;
    box-shadow: 0 2px 18px rgba(0, 0, 0, .02) !important;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: .0625rem solid rgba(46, 54, 80, .125);
    border-radius: .5rem;
    padding: 22px 32px;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    color: #4a5073;
    vertical-align: top;
    border-color: #eaedf2;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-collapse: collapse; 
  }

  table thead tr th {
    vertical-align: center;
    text-align: left;
    border-bottom: 1px solid #eaedf2 !important;
    font-size: 12px;
    font-weight: bold;
    padding-left: 14px;
    padding-bottom: 10px;
  }

  .table_row {
    padding-left: 14px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #eaedf2 !important;
  }

  table tbody tr td {

  }

  table tbody tr:hover {
    background-color: #eff0f2;
    cursor: pointer;
    border-radius: .5rem;
  }

  a:link {
    text-decoration: none;
    color: #4a5073;
  }

  a:visited {
    text-decoration: none;
    color: #4a5073;
  }

  a:hover {
    text-decoration: none;
    color: #4a5073;
  }

  a:active {
    text-decoration: none;
  }
  
  td a { 
    display: block;
  }
</style>