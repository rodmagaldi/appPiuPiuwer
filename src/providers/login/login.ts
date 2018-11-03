import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'
import { Usuario } from '../../modelos/usuario';


@Injectable()
export class LoginProvider {

  public globalToken: string;
  public decodedJSON;
  public userID;
  public username;
  public email;

  constructor(private _http: HttpClient) {
  }

  tokenDecode() {
    const token = this.globalToken;
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      this.decodedJSON = JSON.parse(payload);
      this.userID = this.decodedJSON['user_id'];
      this.username = this.decodedJSON['username'];
      this.email = this.decodedJSON['email']
      return true;
    } else {
      return false;
    }
  }

  efetuaLogin(username: string, password: string) {
    let URL = Constantes.url_endpoint + 'login/';
    let headers = {
      'Content-Type' : 'application/json',
    }
    let body = {
      'username' : username,
      'password' : password
    }
    return this._http.post<Usuario>(URL, body, { headers });
  }
}
