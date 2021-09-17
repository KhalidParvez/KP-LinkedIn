import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:ForbiddenNameValidatorDirective,multi:true}]
})
export class ForbiddenNameValidatorDirective implements Validators {
  @Input() appForbiddenNameValidator ='';

  constructor() { 

  }

}
