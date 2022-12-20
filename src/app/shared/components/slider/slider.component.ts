import {Component, Input, OnInit} from '@angular/core';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  val1!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
