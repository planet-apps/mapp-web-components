export default MappCard;
type MappCard = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const MappCard: import("svelte").Component<{
    title?: string;
    image?: string;
    bylineleft?: string;
    bylineright?: string;
    bylinerightimage?: string;
    description?: string;
    href?: string;
    toplefttext?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    maxHeight?: string;
    heroImageStyle?: string;
}, {}, "">;
type $$ComponentProps = {
    title?: string;
    image?: string;
    bylineleft?: string;
    bylineright?: string;
    bylinerightimage?: string;
    description?: string;
    href?: string;
    toplefttext?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    maxHeight?: string;
    heroImageStyle?: string;
};
