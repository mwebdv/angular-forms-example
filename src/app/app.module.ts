import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// reactive forms
import {ReactiveFormsModule} from '@angular/forms'
// template driven forms
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
// add
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';

import { AppRoutingModule } from './app-routing.module';
import { ValidateNonNumericString } from './Validators/string-validator';
import { TemplateDrivenFormsValidationComponent } from './template-driven-forms-validation/template-driven-forms-validation.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ValidateNonNumericString,
    ReactiveFormsValidationComponent,
    TemplateDrivenFormsValidationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // add
    FormsModule, //add
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
