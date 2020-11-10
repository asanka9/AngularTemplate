import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  CourseName = "Data Science";
  templateName ="";

  constructor() { }

  ngOnInit(): void {

  }

  sideBarToggle(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  getLessonName(name){
    this.CourseName = name;
  }

  getTemplateName(name){
    this.templateName = name;
  }

}
