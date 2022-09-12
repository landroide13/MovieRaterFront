import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie:any;
  @Output() updateMovie = new EventEmitter();
  star: any;
  starMoverd = 0;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  starHover(star: any){
    this.starMoverd = star
    console.log(star)
  }

  starClick(star: any){
    this.api.rateMovie(star, this.movie.id).subscribe(
      res => {
        this.getDetails()
      },
      err => console.log(err)
    )
  }

  getDetails(){
    this.api.getMovie(this.movie.id).subscribe(
      movie => {
        this.updateMovie.emit(movie)
      },
      err => console.log(err)
    )
  }

}
