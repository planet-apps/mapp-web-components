declare const MappRadio: import("svelte").Component<{
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    value: string;
}, {}, "value">;
type MappRadio = ReturnType<typeof MappRadio>;
export default MappRadio;
