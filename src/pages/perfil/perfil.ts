import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Piu } from '../../modelos/piu';
import { ListaPiusProvider } from '../../providers/lista-pius/lista-pius';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public pius: Piu[];
  public meusPius: Piu[] = [];
  public piusInvertido: Piu[];
  public contaMeusPius: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _listaPius: ListaPiusProvider,
    private _login: LoginProvider) {

      this._listaPius.listaPius().subscribe(
        (pius) => {
          this.pius = pius;
          this.piusInvertido = this.pius.reverse();
          for (let piu of this.piusInvertido) {
            if (piu.usuario == this._login.userID) {
              this.meusPius.push(piu)
            }
          }
          this.contaMeusPius = this.meusPius.length
        },
        erro => {
          console.error(erro);
        }
      )
  }

}
