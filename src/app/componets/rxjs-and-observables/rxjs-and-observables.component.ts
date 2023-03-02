import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  filter,
  forkJoin,
  from,
  interval,
  map,
  Observable,
  of,
  Subject,
  tap
} from "rxjs";
import {observerA} from "./common.inc";
import {ajax, AjaxResponse} from "rxjs/ajax";
import {BestCityEver, Fruits, Goods, testArr, User} from "../../shared/data";

@Component({
  selector: 'app-rxjs-and-observables',
  templateUrl: './rxjs-and-observables.component.html',
  styleUrls: ['./rxjs-and-observables.component.css']
})
export class RxjsAndObservablesComponent implements OnInit {


  baseUrl = 'https://random-data-api.com/api/'
  baseUrlName = 'https://random-data-api.com/api/name/'
  appliancesUrl = 'https://random-data-api.com/api/v2/appliances/'
  addressesUrl = 'https://random-data-api.com/api/v2/addresses'
  forkEx = 'No data yet';
  btnText = 'Get Data';
  loginStatus?: boolean;
  value$ = new Subject<string>()
  isLoggedIn$ = new BehaviorSubject<boolean>(false)
  film = {
    title: '',
    name: 'Name',
  };


  ngOnInit(): void {
    // this.filterExample()
    // this.foo12(15)
    // this.foo10(100)
    this.fooObj()

  }

  forkJoinExamples() {
    const randomName$ = ajax(`${this.baseUrlName}random_name/`)
    const randomAppliances$ = ajax(`${this.appliancesUrl}`).pipe(
      map((el: any) => el.response.brand)
    )
    const randomAddresses$ = ajax(`${this.addressesUrl}`)
    randomName$.subscribe(observerA)

    forkJoin([randomName$, randomAppliances$, randomAddresses$]).subscribe(([name, brand, country]: any) => {
      this.forkEx = (`${name.response.name} from ${country.response.country} works on ${brand}`)
    })
  }

  filterExample() {
    of(2, 5, 6, 8, 10, 17).pipe(
      map(el => el * 2),
      filter(el => el > 10)
    ).subscribe(observerA)
  }


  forkExRefresh() {
    this.forkJoinExamples()
    this.btnText = 'Refresh Data'
  }

  getDataUpRequest(data: any) {
    // const dataV = data.value
    // data.value = ''
    of(data).pipe(
      tap(data => console.log('data:', data.value)),
      map(() => data.value),
      concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}/`).pipe(
        catchError(err => of(`No way to fetch data: ${err}`))
      )),
    ).subscribe({
      next: (value: any) => {
        console.log(`${data.value}: `, value.response);
        data.value = '';
      },
      error: (err => console.log('Fail: ', err)),
      complete: (() => {
        console.log('Complete')
      })
    })
  }

  getEmmit(subjectInputData: HTMLInputElement) {
    this.value$.next(subjectInputData.value)
  }

  getSubscribe(subjectInputData: HTMLInputElement) {
    console.log('New Subscriptions')
    this.value$.subscribe(v => console.log(v))
  }

  loggedIn(data: any) {
    console.log('logged in')
    of(data)
      .subscribe(() => this.isLoggedIn$.next(true))
    this.loginStatus = this.isLoggedIn$.value
  }

  loggedOut(data: any) {
    console.log('logged out')
    of(data)
      .subscribe(() => this.isLoggedIn$.next(false))
    this.loginStatus = this.isLoggedIn$.value
  }

  getValue() {
    console.log('isLoggedIn$:', this.isLoggedIn$.value)
  }

  fooObj(): void {


  }


  setFilmName($event: any) {
    console.log('$event:',$event);
    this.film.title = $event
  }
}
