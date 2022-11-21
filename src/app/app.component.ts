import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { CountState } from "./reducers/count/count.reducer";
import { select, Store } from "@ngrx/store";
import {map, Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "./reducers/count/count.selectors";
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from "./reducers/count/count.actions";
import {ParentComponent} from "./componets/parent/parent.component";
import {ChildComponent} from "./componets/child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));
  public disabledDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));
  thirdText = 'third block info'

  @ViewChildren('selectedComponent') selectedBlocks: QueryList<ChildComponent> | undefined
  // @ViewChildren(ChildComponent) selectedBlocks: QueryList<any> | undefined
  @ViewChild('thirdInput') thirdInput: ElementRef | undefined

  constructor(private store$: Store<CountState>) {
  }


  getInfoThirdBtn() {
    // console.log('thirdInput.nativeElement:',this.thirdInput?.nativeElement)
    console.log('thirdInput:',this.thirdInput)
    // this.thirdInput.nativeElement.style.backgroundColor ='red'
    this.thirdText = this.thirdInput?.nativeElement.value
  }

  toggleComponents() {
    this.selectedBlocks?.forEach(el => el.changeColor())
    // console.log('selectedBlocks:', this.selectedBlocks)
    console.log('thirdInput:',this.thirdInput)

  }

  foo(text: string) {
    console.log(text)
  }
}
