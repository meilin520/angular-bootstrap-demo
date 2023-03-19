import { ArticleListComponent } from './ArticleList.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [ArticleListComponent]
})

export class ArticleListModule {}
