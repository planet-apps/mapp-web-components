declare const MappCheckbox: import("svelte").Component<{
    label?: string;
    name?: string;
    checked?: unknown;
}, {}, "checked">;
type MappCheckbox = ReturnType<typeof MappCheckbox>;
export default MappCheckbox;
