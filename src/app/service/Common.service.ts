import { Injectable } from '@angular/core';
import { Breadcrumb } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private breadcrumb: Breadcrumb[] = [
    {
      title: '首页',
      href: '/home'
    }
  ]

  constructor() { }

  setBreadCrumb(value: Breadcrumb[]): void {
    this.breadcrumb = value
  }

  getBreadCrumb(): Breadcrumb[] {
    return this.breadcrumb;
  }
}
