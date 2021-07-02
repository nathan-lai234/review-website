import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-article',
  templateUrl: './review-article.component.html',
  styleUrls: ['./review-article.component.scss'],
})
export class ReviewArticleComponent implements OnInit {
  review = {
    name: 'Trails of the Cold Steel 3',
    score: 8,
  };

  constructor() {}

  ngOnInit(): void {}
}
