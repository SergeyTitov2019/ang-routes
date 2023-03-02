import {Component, Input, OnInit} from '@angular/core';
import {CounterService} from "../../../../services/counter.service";
import {MultipleCounterService} from "../../../../services/multiple-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit {

  @Input() inputNum: number = 1

  result: number = 0;


  constructor( private counterService: CounterService) { }

  ngOnInit(): void {
  }

  increase(){
    this.counterService.increase(this.inputNum)
    this.result = this.counterService.result;
  }

  decrease() {
    this.counterService.decrease(this.inputNum)
    if(this.counterService.result >= 0){
      this.result = this.counterService.result;
    }
  }

}
