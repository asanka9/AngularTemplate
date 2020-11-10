import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}
var a1: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},

    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

var a2: FoodNode[] = [
  {
    name: 'DATA !',
    children: [
      {name: 'Apple'},
      {name: 'Banana aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},

    ]
  }, {
    name: 'DATA 2',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

var TREE_DATA: FoodNode[] = a1;

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,OnChanges {
  @Input() nameInput : any;

  courseName= '';
  subName = '';
  lessonName = '';

  @Output() sendForTemplate:EventEmitter<any> = new EventEmitter();


  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnChanges(changes:SimpleChanges){
    const changeHere = changes['nameInput'];
    this.courseName = changeHere.currentValue;
    switch (this.courseName) {
      case 'Action':
        this.dataSource.data = a2;
        break;

      default:
        break;
    }

  }



  ngOnInit(): void {
  }
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  clickOnSub(name){
    this.sendForTemplate.emit(this.courseName+"_"+this.lessonName+"_"+name);
  }

  clickOnLesson(name){
    this.lessonName = name;
  }
}
