// import { Component, OnInit } from '@angular/core';
// import {Review} from '../../services/review.model';
// import {ActivatedRoute} from '@angular/router';
// import {ReviewService} from '../../common/review.service';
//
// @Component({
//   selector: 'app-addreview',
//   templateUrl: './addreview.component.html',
//   styleUrls: ['./addreview.component.css']
// })
// export class AddreviewComponent implements OnInit {
//   bookId: number;
//   reviews: Review[] = [];
//   newReview: Review = { id: null, username: '', comment: '', rating: null, book: { id: null } };
//
//   constructor(
//     private route: ActivatedRoute,
//     private reviewService: ReviewService
//   ) { }
//
//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.bookId = +params.get('id'); // Convert to number
//       this.loadReviews();
//     });
//   }
//
//       loadReviews()
//     :
//       void {
//         this.reviewService.getReviewsByBookId(this.bookId).subscribe(reviews => {
//           this.reviews = reviews;
//         });
//       }
//
//       addReview()
//     :
//       void {
//         this.reviewService.addReview(this.bookId, this.newReview).subscribe(() => {
//           // this.loadReviews();
//           this.newReview = {id: null, username: '', comment: '', rating: null, book: {id: null}};
//         });
//       }
//       getStarsArray(rating
//     :
//       number
//     ):
//       number[] {
//         return Array(rating).fill(0).map((_, index) => index);
//       }
//     }


import { Component, OnInit } from '@angular/core';
import {Review} from '../../services/review.model';
import {ActivatedRoute} from '@angular/router';
import {ReviewService} from '../../common/review.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  bookId: number;
  reviews: Review[] = [];
  newReview: Review = { id: null, username: '', comment: '', rating: null, book: { id: null } };

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id'); // Convert to number
      this.loadReviews();
    });
  }

  loadReviews()
    :
    void {
    this.reviewService.getReviewsByBookId(this.bookId).subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  addReview()
    :
    void {
    if (this.newReview.username === '' || this.newReview.username == null) {
      // alert('User is required!!!');
      this.snack.open('Username is required!!', '', {
        duration: 3000,
      });
      return;
    }
    this.reviewService.addReview(this.bookId, this.newReview).subscribe(() => {
      // this.loadReviews();
      this.newReview = {id: null, username: '', comment: '', rating: null, book: {id: null}};
      Swal.fire('Review successfully added !!', 'Sucessfully done', 'success');
    });
  }
}

