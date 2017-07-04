import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlumnosGrupoAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alumnos-grupo-admin',
  templateUrl: 'alumnos-grupo-admin.html',
})
export class AlumnosGrupoAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnosGrupoAdminPage');
  }

  gotoAlumnosAdmin(){
    this.navCtrl.push("AlumnosAdminPage");
  }

  gotoAlumnoAdmin(){
    this.navCtrl.push("AlumnoAdminPage");
  }

   
}
