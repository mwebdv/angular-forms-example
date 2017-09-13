import { Component } from '@angular/core';
import { Hero, Address, POWERS } from './../data-model';


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})

export class TemplateDrivenFormsComponent {
  constructor() { }

  get diagnostic() { return JSON.stringify(this.model); }
  
  powers = POWERS;

  model = new Hero(18, 'Dr IQ', [new Address()], this.powers[0]);
}