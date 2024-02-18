import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  photos = [
    {
      src: "../../../../assets/carousel/sign.jpg"
    },
    {
      src: "../../../../assets/carousel/hotdog.jpg"
    },
    {
      src: "../../../../assets/carousel/pasta.jpg"
    },
    {
      src: "../../../../assets/carousel/pizza.jpg"
    },
    {
      src: "../../../../assets/carousel/burger.jpg"
    }
  ]
  
  GoToPrevious() {
    let visible = this.photos[this.photos.length-1]
    for(let i = this.photos.length-1; i >= 0; i--){
      if (i == 0) {
        this.photos[i] = visible
      } else {
        this.photos[i] = this.photos[i-1]
      }
    }
  }

  GoToNext(){
    let first = this.photos[0]
    for(let i = 0; i < this.photos.length - 1; i++){
      this.photos[i] = this.photos[i+1]
    }
    this.photos[this.photos.length - 1] = first
  }
}
