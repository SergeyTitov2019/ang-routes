import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class MultipleCounterService {

  result = 0

  constructor() {
  }

  increase() {
    this.result =  this.result+5
    console.log('increase', this.result);
  }

  decrease() {
    this.result =  this.result-5

    console.log('decrease', this.result);

  }
}
