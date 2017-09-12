import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { POWERS, Address, Hero } from './../data-model';
import { validateNonNumericString } from './../Validators/string-validator'

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})

export class ReactiveValidationComponent {
    heroForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {

        this.heroForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, validateNonNumericString()])],
            secretLairs: this.fb.array([]), // child form group
            power: '',
            sidekick: ''
        });

        // // setValue: checks mapping to data-model, error handling
        // this.heroForm3.setValue({
        //   name: 'test'
        // });
        // // patchValue: no error handling (=silent)
        // this.heroForm3.patchValue({
        //     name: this.hero.name
        // })

        this.heroForm.valueChanges.subscribe(data => console.log('Form changes', data));
    }
    
    @Input() hero: Hero;
    powers = POWERS;

    get secretLairs(): FormArray {
      return this.heroForm.get('secretLairs') as FormArray;
    };

    addLair() {
      this.secretLairs.push(this.fb.group(new Address()));
    }
    
    revert() {
      this.heroForm.reset();
      this.heroForm.setControl("secretLairs", this.fb.array([]));
    }


    submitted = false;
  
    onSubmit() { this.submitted = true; }
}