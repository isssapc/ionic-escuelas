import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForoDocentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-foro-docente',
  templateUrl: 'foro-docente.html',
})
export class ForoDocentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForoDocentePage');
  }

  gotoNuevoForoDocente(){
    this.navCtrl.push("NuevoForoDocentePage");
  }

  gotoConversacionForoDocente(){
    this.navCtrl.push("ConversacionForoDocentePage");
  }

}
