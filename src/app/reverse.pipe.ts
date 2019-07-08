import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(v) {
    if (v) {
      return v.reverse();
    }

  }

}