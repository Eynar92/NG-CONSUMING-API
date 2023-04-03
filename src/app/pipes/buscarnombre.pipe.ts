import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarnombre'
})
export class BuscarnombrePipe implements PipeTransform {

  transform(value: any, args: any): any {

    const nombreP = [];
    for (const recorrido of value) {
      if (recorrido.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        nombreP.push(recorrido);
      }
    }

    return nombreP;
  }

}
