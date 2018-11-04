import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastrarProvider } from '../../providers/cadastrar/cadastrar';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {


  public username;
  public email;
  public first_name;
  public last_name;
  public password;
  public confirm_password;


  constructor(public navCtrl: NavController, 
    private _cadastrarProvider: CadastrarProvider,
    private _alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController) {
      this.menu.enable(false);
  }

  voltaParaLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  cadastrarUsuario() {

    if (!this.email || !this.first_name || !this.last_name || !this.username || !this.password || !this.confirm_password) {
      this._alertCtrl.create(
        {
          title: 'Ops!',
          subTitle: 'Parece que você não comPIUtou todos os campos!',
          buttons: [
            {
              text: "Vou arrumar!",
              cssClass: "aviso-erro-btn"}
          ]
        }
      ).present();
    } else if (this.confirm_password != this.password) {
      this._alertCtrl.create(
        {
          title: 'Ops!',
          subTitle: 'Parece que você não se deciPIU sobre a sua senha!',
          buttons: [
            {
              text: "Vou confirmar a senha corretamente!",
              cssClass: "aviso-erro-btn"
            }
          ]
        }
      ).present();  
    } else {

      this._cadastrarProvider.cadastrarUsuario(this.username, this.password, this.first_name, this.last_name, this.email).subscribe(
        () => {
          this._alertCtrl.create(
            {
              title: "Pronto!",
              subTitle: "Seu cadastro foi realizado com sucesso!",
              buttons: [
                {
                  text: "Fazer Login",
                  handler: () => {
                    this.voltaParaLogin();
                  }
                }
              ]
            }
          ).present();
        },
        erro => {
          console.error(erro);
        }
      )

    }
  }

}
