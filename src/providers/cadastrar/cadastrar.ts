import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'

@Injectable()
export class CadastrarProvider {

  constructor(private _http: HttpClient) {
  }

  cadastrarUsuario(username: string, password: string, first_name: string, last_name: string, email: string) {
    let URL = Constantes.url_endpoint + 'usuarios/registrar/';
    let headers = {
      'Content-Type' : 'application/json',
    }
    let body = {
      'username' : username,
      'password' : password,
      'first_name' : first_name,
      'last_name' : last_name,
      'email' : email
    }
    return this._http.post(URL, body, { headers });
  }

}
