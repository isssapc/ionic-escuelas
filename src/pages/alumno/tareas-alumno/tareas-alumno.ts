import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TareasAlumnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tareas-alumno',
  templateUrl: 'tareas-alumno.html',
})
export class TareasAlumnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasAlumnoPage');
  }

  gotoTareaAlumno(){
    this.navCtrl.push("TareaAlumnoPage");
  }

}
