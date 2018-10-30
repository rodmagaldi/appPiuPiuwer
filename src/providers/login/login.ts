import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'


@Injectable()
export class LoginProvider {

  private _token: string;

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }


  efetuaLogin(username: string, password: string) {
    let URL = Constantes.url_endpoint + 'login/';
    let header = {
      'Content-Type' : 'application/json',
    }
    let body = {
      'username' : 
    }

  }
}
