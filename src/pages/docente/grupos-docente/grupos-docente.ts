import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GruposDocentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupos-docente',
  templateUrl: 'grupos-docente.html',
})
export class GruposDocentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposDocentePage');
  }

  gotoGrupoDocente(){
    this.navCtrl.push("GrupoDocentePage");
  }

}
