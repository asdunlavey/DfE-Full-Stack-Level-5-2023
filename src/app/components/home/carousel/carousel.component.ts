import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  currentSlideIndex = 0;
  slides = [
    { description: 'The development and delivery of software solutions with consideration for the impact on our environment and seeking to promote sustainable business practices.' },
    { description: 'The reduction of internal waste, such as paper, and leveraging technology to remove the need to print and store paper.' },
    { description: 'The provision of online training and remote consultancy services to our customers to reduce unnecessary travel and our carbon footprint.' },
    { description: 'The reduction of waste and encouraging all to recycle where possible.' }
  ];

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}
