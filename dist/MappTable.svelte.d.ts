export declare class RowClickEvent {
}
declare const MappTable: import("svelte").Component<{
    headers: string[];
    headersSearchable: string[];
    rows: any[];
    linkPrefix: string;
    linkColumnName: string;
    update: undefined | ((e: {
        detail: {
            rowIndex: number;
        };
    }) => void);
}, {}, "">;
type MappTable = ReturnType<typeof MappTable>;
export default MappTable;
