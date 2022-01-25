import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Review>;
  @Input() buttonLabel!: string;

  form!: FormGroup;
  review!: Review;

  constructor(
    private fb: FormBuilder,
    private serieService: SerieService,
    private route: ActivatedRoute
  ) {
    this.formSubmitted = new EventEmitter<Review>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitReviewForm(): void {

    this.formSubmitted.emit(this.review);
  }

  onChangeDateReview(dateString: string) {
    this.review.date = new Date(Date.parse(dateString));
  }

  private initForm(): void {
    this.review = new Review(0, new Date(), '', '');

    // The validators required for submit the review form. If you don't meet the requirements of the validators, the button will be disabled. Each validators controls an input of the form to see if you are ok with.//
    this.form = this.fb.group({

      pseudo: [
        null,

        [
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      content: [
        null,
        [
          Validators.minLength(10),
          Validators.maxLength(300),
          Validators.required,
        ],
      ],
      available: [null],
    });
  }
}
