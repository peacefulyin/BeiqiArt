import {Pipe, PipeTransform} from '@angular/core';
import {apiRectify} from "../../util/js/apiTools";

@Pipe({
  name: 'transUrl',
  pure: false
})
export class TransUrlPipe implements PipeTransform {
  constructor() {
  }

  transform(value: any, args?: any): any {
    return apiRectify(value);
  }

}
