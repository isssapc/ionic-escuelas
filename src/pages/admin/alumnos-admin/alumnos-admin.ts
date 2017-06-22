import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlumnosAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alumnos-admin',
  templateUrl: 'alumnos-admin.html',
})
export class AlumnosAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnosAdminPage');
  }

  gotoNuevoAlumnoAdmin(){
    this.navCtrl.push("NuevoAlumnoAdminPage");
  }

}
