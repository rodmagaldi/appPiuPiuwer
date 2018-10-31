import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ListaPiusProvider } from '../../providers/lista-pius/lista-pius';
import { Piu } from '../../modelos/piu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pius: Piu[];

  constructor(public navCtrl: NavController,
    private _listaPius: ListaPiusProvider,
    private _loadingCrtl: LoadingController) {

      var loading = this._loadingCrtl.create({
        spinner: 'hide',
        content:`
          <div class="custom-spinner-container">
            <img class="loading"></img>
          </div>
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
  }

  validaPiu() {
    console.log("Preciso colocar em vermelho o texto e o contador caso seja inválido, além de atualizar o número do contador");
  }

  

}
