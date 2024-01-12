import { Component, OnInit } from '@angular/core';
import {Review} from '../../services/review.model';
import {ActivatedRoute} from '@angular/router';
import {ReviewService} from '../../common/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  bookId: number;
  reviews: Review[] = [];
  // newReview: Review = { id: null, username: '', comment: '', rating: null, book: { id: null } };

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id'); // Convert to number
      this.loadReviews();
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBookId(this.bookId).subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  // addReview(): void {
  //   this.reviewService.addReview(this.bookId, this.newReview).subscribe(() => {
  //     this.loadReviews();
  //     this.newReview = { id: null, username: '', comment: '', rating: null, book: { id: null } };
  //   });
  // }
  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0).map((_, index) => index);
  }
}


