import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginProvider } from '../../providers/login/login'
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username;
  public senha;

  constructor(public navCtrl: NavController,
    private _alertCtrl: AlertController,
    public navParams: NavParams,
    private _login: LoginProvider) {
  }

  irParaCadastro() {
    this.navCtrl.setRoot(CadastroPage.name)
  }

  efetuaLogin(){
    this._login.efetuaLogin(this.username, this.senha).subscribe(
      data => {
        this._login.globalToken = data['token'];
        this._login.tokenDecode();
        this.navCtrl.setRoot(HomePage);
      },
      () => {
        this._alertCtrl.create(
          {
            title: "Ops!",
            subTitle: "PIUrece que algo deu errado!",
            buttons: [
              {
                text: "Tentar novamente",
                cssClass: "aviso-erro-btn"
              }
            ]
          }
        ).present();
      }
    )
  }

}
