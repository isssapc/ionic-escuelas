import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GrupoDocentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupo-docente',
  templateUrl: 'grupo-docente.html',
})
export class GrupoDocentePage {

  segmento:string="materias";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoDocentePage');
  }

gotoNuevoForo(){
  this.navCtrl.push("NuevoForoDocentePage");
}

gotoMateriaDocente(){
  this.navCtrl.push("MateriaDocentePage");
}

gotoNuevoMensajeDocente(){
this.navCtrl.push("NuevoMensajeDocentePage");

}

gotoForoDocente(){
  this.navCtrl.push("ForoDocentePage");

}

gotoMensajeDocente(){
  this.navCtrl.push("MensajeDocentePage");
}

}
