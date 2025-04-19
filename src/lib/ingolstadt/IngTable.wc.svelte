<svelte:options customElement="ing-table" />

<script module>
  export class RowClickEvent {}
</script>

<script lang="ts">
  let {
    headers = [],
    headerssearchable = [],
    rows = [],
    linkprefix = "",
    linkcolumnname = "",
    update = undefined,
  }: {
    headers: string[];
    headerssearchable: string[];
    rows: any[];
    linkprefix: string;
    linkcolumnname: string;
    update: undefined | ((e: { detail: { rowIndex: number } }) => void);
  } = $props();

  if (typeof(headers) == "string") {
    headers = JSON.parse(headers);
  }
  if (typeof(headerssearchable) == "string") {
    headerssearchable = JSON.parse(headerssearchable);
  }
  if (typeof(rows) == "string") {
    rows = JSON.parse(rows);
  }

  let rowsDisplay: any[] = $state(rows);
  let filterInput: string = $state("");

  function search() {
    if (filterInput) {
      let tempData: any[] = [];

      for (let row of rows) {
        let addRow: boolean = false;

        for (let header of headers) {
          if (
            headerssearchable.length === 0 ||
            headerssearchable.includes(header)
          ) {
            if (
              row[header]
                .toString()
                .toLowerCase()
                .includes(filterInput.toLowerCase())
            ) {
              addRow = true;
              break;
            }
          }
        }

        if (addRow) tempData.push(row);
      }

      rowsDisplay = tempData;
    } else {
      rowsDisplay = rows;
    }
  }

  const rowClick = (index: number) => {
    // dispatch native web event
    $host().dispatchEvent(
      new CustomEvent("update", {
        detail: {
          rowIndex: index,
        },
      }),
    );

    // if a callback was provider, also broadcast that
    if (update) {
      update({
        detail: {
          rowIndex: index,
        },
      });
    }
  };
</script>

<div class="card_frame">
  <div class="filter">
    <svg
      data-icon-name="filterIcon"
      viewBox="0 0 18 18"
      width="18"
      height="18"
      aria-hidden="true"
      ><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"
      ></path></svg
    >
    <span class="filter_input_box">
      Filter
      <input
        class="filter_input"
        onkeyup={search}
        bind:value={filterInput}
        placeholder="Value to filter for"
      />
    </span>
  </div>

  <table>
    <thead>
      <tr>
        {#each headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rowsDisplay as row, i}
        <tr
          onclick={() => {
            rowClick(i);
          }}
        >
          {#each Object.entries(row) as col, i}
            <td
              ><a class="table_row" href={linkprefix + row[linkcolumnname]}
                >{col[1]}</a
              ></td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .card_frame {
    border-color: #eaedf2 !important;
    box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0.0625rem solid rgba(46, 54, 80, 0.125);
    border-radius: 0.5rem;
    padding: 22px 32px;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    border-radius: 0.5rem;
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

  .filter {
    margin-top: 20px;
    margin-bottom: 8px;
    margin-left: 8px;
  }

  .header_sort_icon {
    position: absolute;
    margin-left: 4px;
  }

  .filter_input_box {
    position: relative;
    top: -3px;
    font-weight: bold;
    font-size: 14px;
  }

  .filter_input {
    width: 50%;
    margin-left: 8px;
    font-family:
      Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    padding: var(--padding);
    /* border: 2px solid gray; */
    border: 0px;
    outline: none;
    border-radius: 0px;
    /* background-color: #f1f3f4; */
    background-color: rgb(255, 255, 255);
  }
</style>
