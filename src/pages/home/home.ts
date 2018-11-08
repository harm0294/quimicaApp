import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguracionElectronicaPage } from '../configuracion-electronica/configuracion-electronica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  configuracionElectronica():void{
    this.navCtrl.push(ConfiguracionElectronicaPage, {
      val: true
    })
  }
}
