import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TemplateDrivenFormsValidationComponent } from './template-driven-forms-validation/template-driven-forms-validation.component';

const routes: Routes = [
    {
        path: 'template-driven-forms',
        component: TemplateDrivenFormsComponent
    },
    {
        path: 'template-driven-forms-validation',
        component: TemplateDrivenFormsValidationComponent
    },
    {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
    },
    {
        path: "reactive-forms-validation",
        component: ReactiveFormsValidationComponent
    },
    {
      path: '',
      redirectTo: '/template-driven-forms',
      pathMatch: 'full'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}