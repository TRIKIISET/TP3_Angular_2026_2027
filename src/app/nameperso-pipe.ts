import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameperso',
})
export class NamepersoPipe implements PipeTransform {
  transform(value: string, nb:number): string {
    return '*'.repeat(nb)+ value + '*'.repeat(nb);
  }
}
