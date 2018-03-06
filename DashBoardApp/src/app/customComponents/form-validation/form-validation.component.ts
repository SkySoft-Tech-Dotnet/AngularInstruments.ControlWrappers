import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  _myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this._myForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z][a-zA-Z ]*'),
      ])),
      age: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern('[0-9]*'),
        this.ageValueValidator
      ]),
      phone: new FormControl('',
        Validators.required)
    });
  }


  ageValueValidator = function (control: AbstractControl) {
    const age = Number.parseInt(control.value);
    return (age < 121 && age > 0) ? null : { validAgeValue: true };
  }



  onSubmit = function (form) {
    console.log(form.value);
  };
}
