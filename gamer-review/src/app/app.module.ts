import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewArticleModule } from './review-article/review-article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReviewArticleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
