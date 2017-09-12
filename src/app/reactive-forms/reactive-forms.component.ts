import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { POWERS, Hero } from './../data-model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent {
    name = new FormControl();


    heroForm = new FormGroup({
        name: new FormControl()
    });
}