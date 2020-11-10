import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numbers  = [1,2,3,4,56,6];

  constructor() { }

  @Input() templateName:any;

  ngOnInit(): void {
  }

}
