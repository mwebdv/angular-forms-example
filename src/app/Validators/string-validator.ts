import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

export function validateNonNumericString() : ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = isNaN(Number(c.value));
    
    if (isValid) {
        return null;
    } 
    else {
      return {
        isNonNumeric: {
              valid: false
          }
      };
    }
  }
}

@Directive({
    selector: '[isNonNumeric][ngModel]',
    providers: [
      { provide: NG_VALIDATORS, useExisting: ValidateNonNumericString, multi: true }
    ]
  })
  
export class ValidateNonNumericString implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateNonNumericString();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}