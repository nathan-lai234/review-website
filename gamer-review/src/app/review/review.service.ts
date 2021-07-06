import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { REVIEWS } from './mock-reviews';
import { Review } from './review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  localhost = 'http://localhost:3000';

  constructor() {}

  getJSON(path: string, options: object): any {
    console.log(options);
    fetch(path, options)
      .then((res) =>
        res.json().then((data) => ({ ...data, statusCode: res.status }))
      )
      .catch((err) => console.warn(`API_ERROR: ${err.message}`));
  }

  getReviews(): Observable<Review[]> {
    const reviews = of(REVIEWS);
    return reviews;
  }

  addReview(): Observable<any> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Dragon Quest 11',
        title: 'PUFF PUFF',
        score: 0,
        sections: [{ heading: 'A classic JRPG ' }, { paragraph: 'Natsuki' }],
      }),
    };
    console.log(options);
    return this.getJSON(`${this.localhost}/review`, options);
  }
}
