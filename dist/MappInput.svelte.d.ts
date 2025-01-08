declare const MappInput: import("svelte").Component<{
    label?: string;
    icon?: string;
    type?: string;
    placeholder?: string;
    input?: unknown;
    style?: string;
}, {}, "input">;
type MappInput = ReturnType<typeof MappInput>;
export default MappInput;
