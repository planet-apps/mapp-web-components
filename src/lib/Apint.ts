export class ApintMenuConfig {
  items: ApintMenuItem[];
  constructor(items: ApintMenuItem[]) {
    this.items = items;
  }
  toString() {
    return JSON.stringify(this);
  }
}

export class ApintMenuItem {
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
