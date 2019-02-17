import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

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
      firstname:this.formBulid.control(''),
      lastName:[]
    })
    }
    onSubmit(form: FormGroup)
    {
      console.log(form);
    }
}
