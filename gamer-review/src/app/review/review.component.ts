import { Component, OnInit } from '@angular/core';
import { Review } from './review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService
      .getReviews()
      .subscribe((reviews) => (this.reviews = reviews));
  }

  addReview(): void {
    this.reviewService.addReview();
  }
}
