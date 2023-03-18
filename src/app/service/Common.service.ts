import { Injectable } from '@angular/core';
import { Breadcrumb } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private breadcrumb: Breadcrumb[] = []

  constructor() { }

  setBreadCrumb(value: Breadcrumb[]): void {
    this.breadcrumb = value
  }

  getBreadCrumb(): Breadcrumb[] {
    return this.breadcrumb;
  }
}
