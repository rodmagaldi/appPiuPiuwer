import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constantes from '../../modelos/constantes'
import { Usuario } from '../../modelos/usuario';

@Injectable()
export class ListaUsuariosProvider {

  public usuarioLogado: Usuario;

  public email: string;
  public first_name: string;
  public foto_perfil;
  public id: number;
  public last_name: string;
  public username: string;

  constructor(private _http: HttpClient) {
  }

  listaUsuarios() {
    return this._http.get<Usuario[]>(Constantes.url_endpoint+"usuarios/")
  }

  infoUsuario(identificacao: number) {
    return this._http.get<Usuario>(Constantes.url_endpoint+"usuarios/"+identificacao)
  }

}
