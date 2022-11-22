import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dyn-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class DynamicButtonComponent implements OnInit {
  @Input() dynBntTitle = 'title';

  constructor() { }

  ngOnInit(): void {
  }

}
