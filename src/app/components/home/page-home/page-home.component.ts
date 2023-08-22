import { Component, NgModule } from '@angular/core';
import { AdditionalPrinciplesComponent } from '../additional-principles/additional-principles.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HomeIntroComponent } from '../home-intro/home-intro.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
}

@NgModule({
  declarations: [
    PageHomeComponent,
    AdditionalPrinciplesComponent,
    CarouselComponent,
    HomeIntroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageContactModule {
}
