import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
//   styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {

  constructor(private router: Router) {}

  

  ngOnInit(): void {
  }

}
