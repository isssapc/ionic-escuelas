import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlumnosGrupoAdminPage } from "../alumnos-grupo-admin/alumnos-grupo-admin";


/**
 * Generated class for the GrupoAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupo-admin',
  templateUrl: 'grupo-admin.html',
})
export class GrupoAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoAdminPage');
  
  }

  gotoMateriaAdmin(){
    this.navCtrl.push("MateriaAdminPage");
   
  }

  gotoAlumnosGrupoAdmin(){
    this.navCtrl.push("AlumnosGrupoAdminPage");
  }
  
  



}
