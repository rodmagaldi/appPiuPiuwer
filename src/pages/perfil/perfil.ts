import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { Piu } from '../../modelos/piu';
import { ListaPiusProvider } from '../../providers/lista-pius/lista-pius';
import { LoginProvider } from '../../providers/login/login';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ListaUsuariosProvider } from '../../providers/lista-usuarios/lista-usuarios';
import { Camera } from "@ionic-native/camera"

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public mensagem;

  public id: number;
  public username: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public foto_perfil;

  public pius: Piu[];
  public meusPius: Piu[] = [];
  public piusInvertido: Piu[];
  public contaMeusPius: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _listaPius: ListaPiusProvider,
    private _login: LoginProvider,
    private _socialSharing: SocialSharing,
    private _listaUsuarios: ListaUsuariosProvider,
    private _camera: Camera) {

      this._listaPius.listaPius().subscribe(
        (pius) => {
          this.pius = pius;
          this.piusInvertido = this.pius.reverse();
          for (let piu of this.piusInvertido) {
            if (piu.usuario['id'] == this._login.userID) {
              this.meusPius.push(piu)
            }
          }
          this.contaMeusPius = this.meusPius.length;
        },
        erro => {
          console.error(erro);
        }
      )

      this._listaUsuarios.infoUsuario(_login.userID).subscribe(
        (usuario) => {
          this.id = usuario.id;
          this.email = usuario.email;
          this.first_name = usuario.first_name;
          this.last_name = usuario.last_name;
          this.username = usuario.username;
          this.foto_perfil = usuario.foto_perfil;
        },
        erro => {
          console.error(erro)
        }
      )
  }

  tiraFoto() {
    this._camera.getPicture({
      destinationType: this._camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    }).then(
      fotoUri => {
        fotoUri = normalizeURL(fotoUri);
      }
    )
  }

  vemDeZap() {
    var msg = this.mensagem
    this._socialSharing.shareViaWhatsApp(msg);
  }
}
