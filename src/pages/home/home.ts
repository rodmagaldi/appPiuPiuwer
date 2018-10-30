import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  validaPiu() {
    console.log("Preciso colocar em vermelho o texto e o contador caso seja inválido, além de atualizar o número do contador");
  }

  criaNovoPiu() {
    document.createElement("h1");
  }

}
