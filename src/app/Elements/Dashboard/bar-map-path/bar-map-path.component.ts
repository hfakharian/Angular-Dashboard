import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';

import { breadcrumbData } from 'src/app/Models/breadcrumb';

@Component({
  selector: 'app-bar-map-path',
  templateUrl: './bar-map-path.component.html',
  styleUrls: ['./bar-map-path.component.scss']
})
export class BarMapPathComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'title';
  public menuItems: breadcrumbData[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
      }
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: breadcrumbData[] = []): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[BarMapPathComponent.ROUTE_DATA_BREADCRUMB];

      if (label !== undefined && label !== null) {
        let breadcrumb = new breadcrumbData();

        breadcrumb.title = label;
        breadcrumb.path = "/" + url.replace('#', '');

        breadcrumbs.push(breadcrumb);
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
