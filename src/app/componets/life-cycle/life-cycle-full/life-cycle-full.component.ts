import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-full',
  templateUrl: './life-cycle-full.component.html',
  styleUrls: ['./life-cycle-full.component.css']
})
export class LifeCycleFullComponent implements OnInit,
                                                OnChanges,
                                                DoCheck,
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
  @Input() val = 'blank';

  constructor() {
    console.log('Constructor!', this.val)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked!', this.val)
    }

  ngOnDestroy(): void {
    console.log('ngOnDestroy!', this.val)

    // throw new Error('Method not implemented.');
    }

  ngDoCheck(): void {
    console.log('ngDoCheck!', this.val)

    // throw new Error('Method not implemented.');
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges!', this.val)

    // throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
    console.log('ngOnInit!', this.val)
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit!', this.val)

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked!', this.val)

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit!', this.val)

  }


}
