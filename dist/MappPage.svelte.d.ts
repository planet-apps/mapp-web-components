export default MappPage;
type MappPage = SvelteComponent<$$__sveltets_2_PropsWithChildren<$$ComponentProps, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> & {
    $$bindings?: "" | undefined;
};
declare const MappPage: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    title?: string;
    icon?: string;
}, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, "">;
type $$ComponentProps = {
    title?: string;
    icon?: string;
};
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
