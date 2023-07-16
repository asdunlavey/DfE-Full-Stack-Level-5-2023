import { Component, NgModule } from '@angular/core';
import { VCardComponent } from '../v-card/v-card.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent {

}

@NgModule({
  declarations: [
    PageContactComponent,
    VCardComponent,
    ContactFormComponent
  ]
})
export class PageContactModule {
  
}
