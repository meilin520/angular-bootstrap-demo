import { Component, Input, OnInit } from '@angular/core';

type SubMenu = {
  id: string | number
  title: string
  url: string
}

type Menu = {
  id: string|number
  title: string
  url?: string
  children?: SubMenu[]
}

type Breadcrumb = {
  title: string
  href: string|boolean|undefined
}

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
      title: '用户管理',
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

  constructor() {

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

    childrenMenu.forEach((item)=>{
      breadcrumb.push({
        title: item.title,
        href: item.url
      })
    })
  }

}
