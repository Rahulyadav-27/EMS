import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  imports: [RouterModule, CommonModule],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent {

  breadcrumbItems: { label: string, link: string }[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string, link: string }[] = []): { label: string, link: string }[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      this.breadcrumbItems = breadcrumbs;
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: routeURL, link: url });
      this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
