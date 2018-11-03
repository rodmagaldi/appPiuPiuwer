import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ListaPiusProvider } from '../../providers/lista-pius/lista-pius';
import { Piu } from '../../modelos/piu';
import { Usuario } from '../../modelos/usuario';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CriaPiuProvider } from '../../providers/cria-piu/cria-piu';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pius: Piu[];
  public usuarios: Usuario[];
  public piu: string;
  public mensagem: string;
  public contador: number = 0;

  public piusInvertido: Piu[];

  public favoritado: boolean = false;
  // public conteudo: string; O PIU eh o conteudo
  public data: string = new Date().toISOString();
  public usuario: number;

  public counter: HTMLElement;

  constructor(public navCtrl: NavController,
    private _listaPius: ListaPiusProvider,
    private _loadingCrtl: LoadingController,
    private _socialSharing: SocialSharing,
    private _alertCtrl: AlertController,
    private _criaPiu: CriaPiuProvider,
    private _login: LoginProvider) {

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
          this.counter = document.querySelector(".contador-digitos");
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
      this.counter.classList.remove("contador-digitos");
      this.counter.classList.add("erro-contador");
      
    } else {
      event.target.classList.remove("erro");
      this.counter.classList.remove("erro-contador");
      this.counter.classList.add("contador-digitos");
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
      this.usuario = this._login.userID;
      this._criaPiu.criaPiu(this.favoritado, this.piu, this.data, this.usuario).subscribe(
        () => {
          console.log("Sucesso!")
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        },
        erro => {
          console.log(erro)
        }
      )
    }
  }

  vemDeZap() {
    var msg = this.mensagem
    this._socialSharing.shareViaWhatsApp(msg);
  }

}
