export default MappHeader;
type MappHeader = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const MappHeader: import("svelte").Component<{
    title?: string;
    supportuser?: boolean;
    user?: typeof undefined;
    icon?: string;
}, {}, "">;
type $$ComponentProps = {
    title?: string;
    supportuser?: boolean;
    user?: typeof undefined;
    icon?: string;
};
