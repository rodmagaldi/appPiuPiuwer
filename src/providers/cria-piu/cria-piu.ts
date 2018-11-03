import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'
import { LoginProvider } from '../login/login';

@Injectable()
export class CriaPiuProvider {

  constructor(private _http: HttpClient,
    private _login: LoginProvider) {
  }

  criaPiu(favoritado: boolean, conteudo: string, data: string, usuario: number) {
    let URL = Constantes.url_endpoint+'pius/'
    let headers = {
      'Content-Type' : 'application/json',
      'Authorization' : 'JWT ' + this._login.globalToken,
    }
    let body = {
      'favoritado' : favoritado,
      'conteudo' : conteudo,
      'data' : data,
      'usuario' : usuario,
    }
    return this._http.post(URL, body, { headers });
  }

}
