/**
 * Created by mohamed on 15/07/2017.
 */

import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "./translate.service";


@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private _translate: TranslateService) { }

  transform(value: string, args: string | string[]): any { // args can be string or string array
    if (!value) return;
    return this._translate.instant(value, args); // pass in args
  }

}
