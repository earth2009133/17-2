import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { User } from '../user'
@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBulid: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.formBulid.group({
      firstName:this.formBulid.control(''),
      lastName:[],
      Email:[],
      Age:[]
    })
    }
    onSubmit(form: FormGroup)
    {
      console.log(form);
      const {firstName,lastName,Email,Age} = form.value;
      const user = new User(firstName,lastName,Email,Age);
      console.log(user);
    }
}
