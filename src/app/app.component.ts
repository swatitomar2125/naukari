import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router, private route: ActivatedRoute){}

  public pieChartData: any[] = [
    {
      name: 'Value',
      value: 75 // This is the value you want to represent in the semi-circle
    },
    {
      name: 'Remaining',
      value: 25 // This is the remaining value to complete the semi-circle
    }
  ];

  navigateToHome(){
  this.router.navigate(['home-page'], { relativeTo: this.route })
  }
  navigateToJobs() {
    this.router.navigate(['/jobs-page'], { relativeTo: this.route });
  }

  navigateToPaidServices() {
    this.router.navigate(['/paid-services-page'], { relativeTo: this.route });
  }
}