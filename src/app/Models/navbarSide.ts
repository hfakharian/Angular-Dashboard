// tslint:disable-next-line: class-name

export class navbarDataBadge {
  text: string = "";
  class: string = "";
}

export class navbarDataQuery {
  queryParams?: {
      [k: string]: any;
  };
}

export class navbarData {
  public active?: boolean = false;
  public title?: boolean = false;
  public name?: string;
  public url?: string;
  public icon?: string = "";
  public children?: navbarData[];
  public badge?:navbarDataBadge;
  public query?: navbarDataQuery;
}


