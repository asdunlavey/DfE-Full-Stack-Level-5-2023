import { Component, NgModule } from '@angular/core';
import { AdditionalPrinciplesComponent } from '../additional-principles/additional-principles.component';

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
    AdditionalPrinciplesComponent
  ]
})
export class PageContactModule {
}
