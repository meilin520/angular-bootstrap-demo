import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service';
import { Menu, SubMenu, Breadcrumb } from 'src/app/types';

@Component({
  selector: 'app-layout-sider',
  templateUrl: './layout-sider.component.html',
  styleUrls: ['./layout-sider.component.sass']
})
export class LayoutSiderComponent implements OnInit {
  @Input()
  menus: Menu[] = [
    {
      id: 1,
      title: '图片管理',
      children: [
        {
          id: 11,
          title: '图片列表',
          url: '/pictureList',
        }
      ]
    },
    {
      id: 2,
      title: '文章管理',
      children: [
        {
          id: 21,
          title: '文章列表',
          url: '/articleList'
        },
        {
          id: 22,
          title: '文章分类',
          url: '/articleCategory'
        }
      ]
    }
  ];

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
    console.log(this.menus,99)
  }

  selectCurrentMenu(menu: Menu, i: number, j: number): void {
    let breadcrumb: Breadcrumb[] = []
    let childrenMenu: SubMenu[] = menu.children||[]

    breadcrumb.push({
      title: menu.title,
      href: menu.url?menu.url:false
    })

    if(childrenMenu.length>0){
      breadcrumb.push({
        title: childrenMenu[j].title,
        href: childrenMenu[j].url? childrenMenu[j].url: false,
      })
    }

    this.commonService.setBreadCrumb(breadcrumb)
  }

}
