import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from "../../modelos/constantes"
import { Piu } from '../../modelos/piu';


@Injectable()
export class ListaPiusProvider {

  public favoritado: boolean;

  constructor(private _http: HttpClient) {
  }

  listaPius() {
    return this._http.get<Piu[]>(Constantes.url_endpoint+"pius/")
  }

  infoPiu(identificacao: number) {
    return this._http.get<Piu[]>(Constantes.url_endpoint+'pius/'+identificacao)
  }

}
