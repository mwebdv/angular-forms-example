import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { POWERS, Address, Hero } from './../data-model';
import { validateNonNumericString } from './../Validators/string-validator'

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.css']
})

export class ReactiveFormsValidationComponent {
  heroForm: FormGroup;
  powers = POWERS;


  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    // create Form
    this.heroForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, validateNonNumericString()])],
      secretLairs: this.fb.array([]), // child form group
      power: '',
      sidekick: ''
    });

    this.setDefaults();

    this.heroForm.valueChanges.subscribe(data => console.log('Form changes', data));
  }

  // sets Form default values
  setDefaults() {
    // setValue: checks mapping to data-model, error handling
    // only works when all properties are provided
    this.heroForm.setValue({
      name: 'test',
      secretLairs: [],
      power: this.powers[1],
      sidekick: '',
    });

    // patchValue: no error handling (=silent)
    // works also for single properties
    this.heroForm.patchValue({
      name: "testname"
    });
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  revert() {
    this.heroForm.reset();
    this.heroForm.setControl("secretLairs", this.fb.array([]));
    this.setDefaults();
  }
}