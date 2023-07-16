import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'about', component: PageAboutComponent},
  { path: 'contact', component: PageContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
