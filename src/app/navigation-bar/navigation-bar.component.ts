import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  navigateToHome(){
    this.router.navigate(['home-page'], { relativeTo: this.route })
    }
    navigateToJobs() {
      this.router.navigate(['/jobs-page'], { relativeTo: this.route });
    }
  

  ngOnInit(): void {
  }

}
