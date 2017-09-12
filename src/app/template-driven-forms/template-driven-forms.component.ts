import { Component } from '@angular/core';
import { Hero, Address, POWERS } from './../data-model';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})


export class TemplateDrivenFormsComponent {
  powers = POWERS;

  model = new Hero(18, 'Dr IQ', [new Address()], this.powers[0]);
  
  
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  newTemplateHero() {
    this.model = new Hero(42, '', [new Address()], '');
  }

  change(e) {
    console.log(e);
  }

}
