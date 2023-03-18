import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service';
import { Breadcrumb } from 'src/app/types';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.sass']
})
export class LayoutHeaderComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  get breadcrumb(): Breadcrumb[] {
    return this.commonService.getBreadCrumb();
  }

}
