export class MappMenuConfig {
    items;
    constructor(items) {
        this.items = items;
    }
    toString() {
        return JSON.stringify(this);
    }
}
export class MappMenuItem {
    title;
    url;
    icon;
    constructor(title, url, icon) {
        this.title = title;
        this.url = url;
        this.icon = icon;
    }
    toString() {
        return JSON.stringify(this);
    }
}
