import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewArticleComponent } from './review-article.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [ReviewArticleComponent, ScoreComponent],
  imports: [CommonModule],
  exports: [ReviewArticleComponent],
})
export class ReviewArticleModule {}
