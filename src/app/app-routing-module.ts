import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { PaidServicesPageComponent } from './paid-services/paid-services-page.component';

const routes: Routes = [
    { path: 'home-page', component: HomePageComponent},
    { path: 'jobs-page', component: JobsPageComponent},
    { path: 'paid-services-page', component: PaidServicesPageComponent}

    // { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  ]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }