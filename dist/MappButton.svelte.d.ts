export default MappButton;
type MappButton = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const MappButton: import("svelte").Component<{
    type?: string;
    size?: string;
    label?: string;
    onClick?: typeof undefined;
}, {}, "">;
type $$ComponentProps = {
    type?: string;
    size?: string;
    label?: string;
    onClick?: typeof undefined;
};
