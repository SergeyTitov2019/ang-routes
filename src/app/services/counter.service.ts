import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// @Injectable()

export class CounterService {

  result = 0

  constructor() {
  }

  increase(num: number) {
    this.result = this.result + num
  }

  decrease(num: number) {
    this.result = this.result - num
  }

}
