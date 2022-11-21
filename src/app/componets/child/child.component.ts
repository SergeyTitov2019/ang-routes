import {Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {GrandChildComponent} from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()title?: string
  @Input() text = 'Default child text';
  @ContentChildren(GrandChildComponent) grand!: QueryList<GrandChildComponent>
  @ContentChildren('grandCustom') grandCustom!: QueryList<GrandChildComponent>
  @ContentChild('oneItem')oneItem!: ElementRef;
  color = false

  constructor() { }

  ngOnInit(): void {
  }

  changeColor():void{
    this.color = !this.color;
  }

  toggleBtn() {
    // this.oneItem.nativeElement.toggleFlag()
    // this.grandCustom.forEach(i=> i.toggleFlag())
    // this.grandCustom.map(i=> i.toggleFlag())
    // console.log('GrandChildComponent:', this.grand)
    // console.log('grandCustom:', this.grandCustom)
    console.log('oneItem:', this.oneItem)
  }
}
