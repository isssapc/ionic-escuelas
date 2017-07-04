import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';

/**
 * Generated class for the NuevoGrupoAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nuevo-grupo-admin',
  templateUrl: 'nuevo-grupo-admin.html',
})
export class NuevoGrupoAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoGrupoAdminPage');
  }

Aula() {
    let prompt = this.alertCtrl.create({
      title: 'Agregar aula',
      message: "Inserte en nombre del aula asignado al grupo",
      inputs: [
        {
          name: 'aula',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}
