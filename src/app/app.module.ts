import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutModule } from './layout/main-layout/main-layout.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { httpInterceptorProviders } from './http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ArticleListModule } from './page/Article/ArticleList/ArticleList.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
    MainLayoutModule,
  ],
  providers: [
    AppRoutingModule,
    HttpErrorHandler,
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
