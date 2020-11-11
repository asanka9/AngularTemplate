import { Component, Input, OnInit,ViewEncapsulation,PipeTransform, Pipe, } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  numbers  = [1,2,3,4,56,6];

  vdUrl:String="https://www.youtube.com/embed/SEnXr6v2ifU";
  aU:String;
  constructor() {
    this.vdUrl = "https://www.youtube.com/embed/SEnXr6v2ifU";
    this.aU = "https://img.youtube.com/vi/SEnXr6v2ifU/mqdefault.jpg";
  }

  @Input() templateName:any;

  ngOnInit(): void {
  }

  clickOnVideoVTab(url){
    alert(url);
    this.vdUrl = "https://www.youtube.com/embed/t2ByLmLnYJ8";
  }

}
