import {Component, OnInit} from '@angular/core';

export class User {
  name?: string;
  userName?: string
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent implements OnInit {

  user!: User
  submitted = false

  ngOnInit() {
    this.user = {
      name: '',
      userName: ''
    }
  }

  get diagnostic() {
    // console.log('user:', this.user)
    return JSON.stringify(this.user)
  }

  processForm() {
    // console.log(this.user);
    this.submitted = true
  }

  checkData(data: any){
    console.log('data:',data);
  }
}
