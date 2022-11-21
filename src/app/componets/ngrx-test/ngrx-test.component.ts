import { Component, OnInit } from '@angular/core';
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from "../../reducers/count/count.actions";
import {select, Store} from "@ngrx/store";
import {CountState} from "../../reducers/count/count.reducer";
import {map, Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "../../reducers/count/count.selectors";

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.css']
})
export class NgrxTestComponent implements OnInit {

  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));
  public disabledDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>) {
  }


  ngOnInit(): void {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction())


  }
  decrease() {
    this.store$.dispatch(new CountDecreaseAction())
  }
  clear() {
    this.store$.dispatch(new CountClearAction())
    console.log('clear')
  }


}
