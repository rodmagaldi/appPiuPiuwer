import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ListaPiusProvider } from '../../providers/lista-pius/lista-pius';
import { Piu } from '../../modelos/piu';
import { ListaUsuariosProvider } from '../../providers/lista-usuarios/lista-usuarios';
import { Usuario } from '../../modelos/usuario';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string;
  public first_name: string;
  public foto_perfil;
  public id: number;
  public last_name: string;
  public username: string;

  public pius: Piu[];
  public usuarios: Usuario[];
  public piu: string;
  public mensagem: string;
  public contador: number = 0;

  public piusInvertido: Piu[];

  constructor(public navCtrl: NavController,
    private _listaPius: ListaPiusProvider,
    private _listaUsuarios: ListaUsuariosProvider,
    private _loadingCrtl: LoadingController,
    private _socialSharing: SocialSharing,
    private _alertCtrl: AlertController) {

      var loading = this._loadingCrtl.create({
        spinner: 'hide',
        content:`
          <div class="custom-spinner-container">
            <img class="loading"></img>
          </div>`
          +
          "Pius sendo piados..."
      });
      loading.present();

      this._listaPius.listaPius().subscribe(
        (pius) => {
          this.pius = pius;
          loading.dismiss();
          this.piusInvertido = this.pius.reverse();
        },
        erro => {
          console.error(erro);
        }
      )

      this._listaUsuarios.listaUsuarios().subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
          console.log(this.usuarios);
        },
        erro => {
          console.error(erro);
        }
      )
  }

  validaPiu(event) {
    this.contador = this.piu.length;
    
    if (this.piu.length > 140) {
      event.target.classList.add("erro")
      
    } else {
      event.target.classList.remove("erro")
    }
  }

  piarPiu() {
    if (!this.piu) {
      this._alertCtrl.create(
        {
          title: "Ops!",
          subTitle: "Seu piu deve conter algum conteúdo piável!",
          buttons: [
            {text: "Vou decidir o que piar!"}
          ]
        }
      ).present();
    } else if (this.piu.length > 140) {
      this._alertCtrl.create(
        {
          title: "Ops!",
          subTitle: "Parece que seu piu está muito comPIUdo!",
          buttons: [
            {text: "Vou encurtar meu piu!"}
          ]
        }
      ).present();
    } else {
      console.log("AQUI ENTRA A PARTE DE PIAR DE FATO")
    }
  }

  vemDeZap() {
    var msg = this.mensagem
    this._socialSharing.shareViaWhatsApp(msg);
  }

}
