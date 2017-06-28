import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForosAlumnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-foros-alumno',
  templateUrl: 'foros-alumno.html',
})
export class ForosAlumnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForosAlumnoPage');
  }

  gotoForoAlumno(){
    this.navCtrl.push("ForoAlumnoPage");
  }

}
