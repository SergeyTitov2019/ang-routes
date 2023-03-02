import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {

  form!: FormGroup
  userNameHasError = ''

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    // Старый тип записи, то применения FormGroup FormControl
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   userName: new FormControl(''), })

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      addresses: this.fb.array([
        this.fb.group({
          city: [''],
          country: [''],
        })
      ])
    })


    this.form.valueChanges.subscribe(data => {

      let formName = this.form.get('name');
      // let formUsername = this.form.get('userName')

      // if (formUsername?.invalid && formUsername.dirty || formUsername?.touched) {
      //   this.userNameHasError = 'User name is required!'
      // }
    })

    console.log('form:', this.form);
  }

  processForm(): void {
    console.log('processing', this.form.value);
  }

  getData(data: any): void {
    console.log('data::', data);
  }

}
