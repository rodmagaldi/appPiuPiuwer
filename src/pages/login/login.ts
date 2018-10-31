import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginProvider } from '../../providers/login/login'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username;
  public senha;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _login: LoginProvider) {
  }

  irParaCadastro() {
    this.navCtrl.setRoot(CadastroPage.name)
  }

  efetuaLogin(){
    this._login.efetuaLogin(this.username, this.senha).subscribe(
      data => {
        this._login.token = data['token'];
      },
      erro => {
        console.error(erro);
      }
    )
  }

}
