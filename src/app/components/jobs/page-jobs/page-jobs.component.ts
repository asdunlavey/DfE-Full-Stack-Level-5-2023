import { Component, NgModule } from '@angular/core';
import { JobSpecificationsFormComponent } from '../job-specifications-form/job-specifications-form.component';

@Component({
  selector: 'app-page-jobs',
  templateUrl: './page-jobs.component.html',
  styleUrls: ['./page-jobs.component.css']
})
export class PageJobsComponent {

}
@NgModule({
  declarations: [
    PageJobsComponent,
    JobSpecificationsFormComponent,
  ]
})
export class PageJobsModule {
  
}
