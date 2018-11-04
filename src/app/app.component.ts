import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { ListaUsuariosProvider } from '../providers/lista-usuarios/lista-usuarios';
import { LoginProvider } from '../providers/login/login';
@Component({
  templateUrl: 'app.html',
  selector: 'apppiupiuwer'
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;
  rootPage:any = LoginPage;

  public paginas = [
    { titulo: "Perfil", componente: PerfilPage.name, icone: "person" }
  ]

  public id: number;
  public username: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public foto_perfil;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private _listaUsuarios: ListaUsuariosProvider,
    private _login: LoginProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.id = this._login.userID;
    this._listaUsuarios.infoUsuario(this.id).subscribe(
      (usuario) => {
        this.id = usuario.id;
        this.email = usuario.email;
        this.first_name = usuario.first_name;
        this.last_name = usuario.last_name;
        this.username = usuario.username;
        this.foto_perfil = usuario.foto_perfil;
      },
      erro => {
        console.error(erro);
      }
    )
  }

  irParaPagina (componente) {
    this.nav.push(componente)
  }

}

