export default MappSelect;
type MappSelect = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const MappSelect: import("svelte").Component<{
    label?: string;
    icon?: string;
    type?: string;
    placeholder?: string;
    options?: unknown[];
    input?: string;
    style?: string;
}, {}, "">;
type $$ComponentProps = {
    label?: string;
    icon?: string;
    type?: string;
    placeholder?: string;
    options?: unknown[];
    input?: string;
    style?: string;
};
