import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findDescription'
})
export class FindDescriptionPipe implements PipeTransform {

  transform(items: {id: number, descripcion: string}[], id: number): string | undefined {
    if (!items || !id) {
      return undefined;
    }
    const item = items.find(item => item.id === id);
    return item ? item.descripcion : undefined;
  }

}
