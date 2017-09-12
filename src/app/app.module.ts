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
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

import { AppRoutingModule } from './app-routing.module';
import { ValidateNonNumericString } from './Validators/string-validator';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ValidateNonNumericString,
    ReactiveValidationComponent,
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
