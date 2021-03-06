import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
   @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasAlumnoPage');
  }

  gotoTareaAlumno(){
    this.navCtrl.push("TareaAlumnoPage");
  }

  


}
