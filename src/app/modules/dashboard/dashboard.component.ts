import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  numbers  = [1,2,3,4,56,6];

  constructor() { }

  @Input() templateName:any;

  ngOnInit(): void {
  }

}
