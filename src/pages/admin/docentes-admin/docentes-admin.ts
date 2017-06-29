import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocentesAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-docentes-admin',
  templateUrl: 'docentes-admin.html',
})
export class DocentesAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocentesAdminPage');
  }

  gotoNuevoDocenteAdmin(){
    this.navCtrl.push("NuevoDocenteAdminPage");
  }

  gotoDocenteAdmin(){
    this.navCtrl.push("DocenteAdminPage");
  }

}
