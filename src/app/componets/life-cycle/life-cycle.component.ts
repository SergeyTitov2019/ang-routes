import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  @ViewChildren('selectedComponent') selectedBlocks: QueryList<ChildComponent> | undefined
  // @ViewChildren(ChildComponent) selectedBlocks: QueryList<any> | undefined
  @ViewChild('thirdInput') thirdInput: ElementRef | undefined
  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleComponents() {
    this.selectedBlocks?.forEach(el => el.changeColor())
    // console.log('selectedBlocks:', this.selectedBlocks)
    console.log('thirdInput:',this.thirdInput)

  }

}
