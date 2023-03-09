import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
  },
  {
    path: 'login', component: BaseLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
