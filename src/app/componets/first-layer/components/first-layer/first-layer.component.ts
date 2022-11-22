import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-layer',
  templateUrl: './first-layer.component.html',
  styleUrls: ['./first-layer.component.css']
})
export class FirstLayerComponent implements OnInit {
  title = 'Front End Dev';

  constructor() { }

  ngOnInit(): void {
  }

}
