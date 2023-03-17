import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { PageNotFoundComponent } from './page/PageNotFound/PageNotFound.component';
import { HomeComponent } from './page/Home/Home.component';
import { PictureListComponent } from './page/Picture/PictureList/PictureList.component';
import { ArticleListComponent } from './page/Article/ArticleList/ArticleList.component';
import { ArticleCategoryComponent } from './page/Article/ArticleCategory/ArticleCategory.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'pictureList',
        component: PictureListComponent
      },
      {
        path: 'articleList',
        component: ArticleListComponent
      },
      {
        path: 'articleCategory',
        component: ArticleCategoryComponent
      }
    ]
  },
  {
    path: 'login',
    component: BaseLayoutComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
