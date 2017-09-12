import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
    {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
    },
    {
        path: "reactive-forms-validation",
        component: ReactiveValidationComponent
    },
    {
        path: 'template-driven-forms',
        component: TemplateDrivenFormsComponent
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