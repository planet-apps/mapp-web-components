export default MappHeaderLite;
type MappHeaderLite = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const MappHeaderLite: import("svelte").Component<{
    title?: string;
    supportuser?: boolean;
    username?: string;
    userpic?: string;
}, {}, "">;
type $$ComponentProps = {
    title?: string;
    supportuser?: boolean;
    username?: string;
    userpic?: string;
};
