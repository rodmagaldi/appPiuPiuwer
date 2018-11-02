import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'


@Injectable()
export class LoginProvider {

  public token: string;

  constructor(private _http: HttpClient) {
  }


  efetuaLogin(username: string, password: string) {
    let URL = Constantes.url_endpoint + 'login/';
    let headers = {
      'Content-Type' : 'application/json',
      // 'Authorization' : "JWT " + this.token,
    }
    let body = {
      'username' : username,
      'password' : password
    }
    return this._http.post(URL, body, { headers });
  }
}
