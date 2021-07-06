import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewArticleComponent } from './review-article/review-article.component';
import { ScoreComponent } from './score/score.component';
import { ReviewComponent } from './review.component';

@NgModule({
  declarations: [ReviewArticleComponent, ScoreComponent, ReviewComponent],
  imports: [CommonModule],
  exports: [ReviewComponent],
})
export class ReviewModule {}
