import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { LayoutHeaderComponent } from '../components/layout-header/layout-header.component';
import { LayoutContentComponent } from '../components/layout-content/layout-content.component';
import { LayoutFooterComponent } from '../components/layout-footer/layout-footer.component';
import { LayoutSiderComponent } from '../components/layout-sider/layout-sider.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutWrapperComponent } from '../components/layout-wrapper/layout-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    MainLayoutComponent,
    LayoutWrapperComponent,
    LayoutHeaderComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutSiderComponent,
  ],

})
export class MainLayoutModule { }
