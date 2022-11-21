import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  text = 'Parent text';
  getInfoFromInput(data: any){
    console.log('data:',typeof(data))

    this.text = data.value
  };


  constructor() { }

  ngOnInit(): void {
  }

}
