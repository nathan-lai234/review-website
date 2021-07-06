import { Component, Input, OnInit } from '@angular/core';
import { Review, emptyReview } from '../review';
@Component({
  selector: 'app-review-article',
  templateUrl: './review-article.component.html',
  styleUrls: ['./review-article.component.scss'],
})
export class ReviewArticleComponent implements OnInit {
  @Input() review: Review = emptyReview();

  constructor() {}

  ngOnInit(): void {}
}
