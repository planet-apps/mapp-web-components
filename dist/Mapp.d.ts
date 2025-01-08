export declare class MappMenuConfig {
    items: MappMenuItem[];
    constructor(items: MappMenuItem[]);
    toString(): string;
}
export declare class MappMenuItem {
    title: string;
    url: string;
    icon: string;
    constructor(title: string, url: string, icon: string);
    toString(): string;
}
