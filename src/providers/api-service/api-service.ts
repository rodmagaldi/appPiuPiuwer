import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  // Quando for necessário, aqui será o único lugar a ser modificado!
  private _url: string = 'http://piupiuwer.polijunior.com.br/api/';

  get url() {
    return this._url;
  }
}
