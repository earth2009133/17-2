import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, FormControl, AbstractControl } from '../../../node_modules/@angular/forms';
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
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', this.EmailVal],
      Age: ['', [Validators.required, Validators.min(0),Validators.max(99)]]
    })
  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(<FormControl>form.get('firstName').errors);
      console.log(form.valid, form.invalid);
      const { firstName, lastName, Email, Age } = form.value;
      const user = new User(firstName, lastName, Email, Age);
      console.log(user);
    } else {
      ['firstName', 'lastName', 'Email', 'Age'].forEach((key: string) => {
        console.log(form.get(key).markAsTouched())
        console.log(form.get(key))
      })
    }
  }
  EmailVal(control: AbstractControl) {
    const value: string = control.value;
    if (value && value.includes('@')) {
      return null;
    }
    return { Email:true};
  }

}

