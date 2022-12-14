import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-second-l-first',
  templateUrl: './second-layer-3d.html',
  styleUrls: ['./second-layer.css']
})
export class SecondLayer3d  {

  userForm = new FormGroup({
    userLogin: new FormControl(""),
    userPass: new FormControl("",
      [Validators.required, Validators.minLength(10)]
    )
  })
  ifDisabled = false;

  onSubmit(el: any){
    if(this.userForm.valid){
      this.ifDisabled = true
    }
    console.log(el)
  }
}
