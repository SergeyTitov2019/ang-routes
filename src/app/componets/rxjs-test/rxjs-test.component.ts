import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, interval, Observable, ReplaySubject, Subject, take} from "rxjs";
import {observerA, observerB} from "./components/common.inc";

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {

  observable$ = new Observable(i=> {
    i.next('Alice')
    i.next('Sam')
  })
  observable = interval(1000).pipe(take(5))
  bridge = new Subject()
  event = new Subject()
  behaviorSubject = new BehaviorSubject(9)
  replaySubject = new ReplaySubject(5)


  ngOnInit(): void {
    console.clear()
    this.observableFoo()
    // this.firstPattern()
    // this.secondSubjectPattern()
    // this.thirdSubjectPattern()
    // this.forthBehaviorSubjectPattern()
    // this.fifthReplaySubjectPattern()
  }

  observableFoo(){
    this.observable$.subscribe(observerA)
    setTimeout(()=>{
      this.observable$.subscribe(observerB)
    },2000)
  }

  firstPattern(): void {
    this.observable.subscribe(observerA)
    setTimeout(() => {
        this.observable.subscribe(observerB)
      }, 3000
    )
  }

  secondSubjectPattern(): void {
    /*
        Subject: Observer & Observable hybrid
    *  -^-a-b-c|
    *  ---^-b-c|
    * */

    this.bridge.subscribe(observerA)
    this.observable.subscribe(this.bridge)
    setTimeout(() => {
        this.bridge.subscribe(observerB)
      }, 3000
    )
  }

  thirdSubjectPattern(): void {
    /*
        Using Subject as Event
    *  -^-a-b-c---d----->
    *  ---------^-d----->
    * */

    this.event.subscribe(observerA)

    setTimeout(() => {
        this.event.subscribe(observerB)
      }, 100
    )

    this.event.next(1)
    this.event.next(5)
    this.event.next(3)
    setTimeout(() => {
      this.event.next('thirdSubjectPattern')
    }, 2000)
  }

  forthBehaviorSubjectPattern(): void {
    /*
        BehaviorSubject keeps value over the time
    * */

    const val = this.behaviorSubject.getValue()

    this.behaviorSubject.subscribe(observerA)

    setTimeout(() => {
        this.behaviorSubject.subscribe(observerB)
      }, 100
    )

    this.behaviorSubject.next(1)
    this.behaviorSubject.next(8)
    this.behaviorSubject.next(3)
    setTimeout(() => {
      this.behaviorSubject.next(100)
      console.log('val:',val);
    }, 2000)
  }

  fifthReplaySubjectPattern(): void {
    /*
        ReplaySubject keeps value over the time
    * */

    const val = this.behaviorSubject.getValue()

    this.behaviorSubject.subscribe(observerA)

    setTimeout(() => {
        this.behaviorSubject.subscribe(observerB)
      }, 100
    )

    this.behaviorSubject.next(1)
    this.behaviorSubject.next(8)
    this.behaviorSubject.next(3)
    setTimeout(() => {
      this.behaviorSubject.next(100)
      console.log('val:',val);
    }, 2000)
  }

}
