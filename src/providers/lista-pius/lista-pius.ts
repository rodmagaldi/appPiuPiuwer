import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from "../../modelos/constantes"
import { Piu } from '../../modelos/piu';

/*
  Generated class for the ListaPiusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaPiusProvider {

  constructor(private _http: HttpClient) {
  }

  listaPius() {
    return this._http.get<Piu[]>(Constantes.url_endpoint+"pius/")
  }

}
