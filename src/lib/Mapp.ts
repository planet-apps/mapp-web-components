export class MappMenuConfig {
  items: MappMenuItem[];
  constructor(items: MappMenuItem[]) {
    this.items = items;
  }
  toString() {
    return JSON.stringify(this);
  }
}

export class MappMenuItem {
  title: string;
  url: string;
  icon: string
  constructor(title: string, url: string, icon: string) {
    this.title = title;
    this.url = url;
    this.icon = icon;
  }
  toString() {
    return JSON.stringify(this);
  }
}
