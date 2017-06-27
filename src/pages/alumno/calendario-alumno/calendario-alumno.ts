import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarioAlumnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendario-alumno',
  templateUrl: 'calendario-alumno.html',
})
export class CalendarioAlumnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioAlumnoPage');
  }
  
  gotoDiaCalendarioAlumno(){
    this.navCtrl.push("DiaCalendarioAlumnoPage");
  }

}
