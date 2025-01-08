declare const MappCatSelect: import("svelte").Component<{
    headers: string[];
    headersSearchable: string[];
    categories: {
        [key: string]: any[];
    };
    linkPrefix: string;
    linkColumnName: string;
    update: undefined | ((e: {
        detail: {
            rowIndex: number;
        };
    }) => void);
}, {}, "">;
type MappCatSelect = ReturnType<typeof MappCatSelect>;
export default MappCatSelect;
