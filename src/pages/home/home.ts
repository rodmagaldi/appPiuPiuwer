import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
    private _listaPius: ListaPiusProvider,
    private _listaUsuarios: ListaUsuariosProvider,
    private _loadingCrtl: LoadingController,
    private _socialSharing: SocialSharing) {

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


  vemDeZap() {
    var msg = this.mensagem
    this._socialSharing.shareViaWhatsApp(msg);
  }

}
