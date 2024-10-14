import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  valoracion = 6;
  ratingClass = 'red';

  ngOnInit() {
    this.calcRating();
  }

  calcRating() {
    this.ratingClass = this.valoracion > 5 ? 'green' : 'red';

  }

}
