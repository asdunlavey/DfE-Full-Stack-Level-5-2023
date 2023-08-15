import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/home/page-home/page-home.component';
import { PageAboutComponent } from './components/about/page-about/page-about.component';
import { PageContactComponent } from './components/contact/page-contact/page-contact.component';
import { PageJobsComponent } from './components/jobs/page-jobs/page-jobs.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'jobs', component: PageJobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
