import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/* Função baseada no exemplo disponibilizado na documentação do Angular para validações customizáveis */
export function regexValidator(expression: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = expression.test(control.value);
    return forbidden ?  null : { forbiddenName: { value: control.value } };
  };
}
