import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properName'
})
export class ProperNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let [firstName, LastName] = value.split(' ');
    firstName = firstName.charAt(0).toLocaleUpperCase + firstName.substr(1,firstName.length-1);
    LastName = LastName.charAt(0).toLocaleUpperCase + LastName.substr(1,LastName.length-1);
    return `${firstName} ${LastName}` ;
  }

}
