import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the GruposAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupos-admin',
  templateUrl: 'grupos-admin.html',
})
export class GruposAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposAdminPage');
  }

  gotoNuevoGrupoAdmin(){
    this.navCtrl.push("NuevoGrupoAdminPage");
  }

}
