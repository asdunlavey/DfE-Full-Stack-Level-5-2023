import { Component, NgModule } from '@angular/core';
import { ContactSummaryInformationComponent } from '../contact-summary-information/contact-summary-information.component';
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
    ContactSummaryInformationComponent,
    VCardComponent,
    ContactFormComponent
  ]
})
export class PageContactModule {
}
