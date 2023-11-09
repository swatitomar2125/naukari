import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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

 

  navigateToPaidServices() {
    this.router.navigate(['/paid-services-page'], { relativeTo: this.route });
  }


  ngOnInit(): void {
  }

}
