import { Component } from '@angular/core';
import { Hero, Address, POWERS } from './../data-model';

@Component({
  selector: 'app-template-driven-forms-validation',
  templateUrl: './template-driven-forms-validation.component.html',
  styleUrls: ['./template-driven-forms-validation.component.css']
})


export class TemplateDrivenFormsValidationComponent {
  powers = POWERS;

  model = new Hero(18, 'Dr IQ', [new Address()], this.powers[0]);
  
  
  submitted = false;
  onSubmit() { this.submitted = true; }

  change(e) { console.log(e); }

  get diagnostic() { return JSON.stringify(this.model); }
  
  newTemplateHero() {
    this.model = new Hero(42, '', [new Address()], '');
  }

}
