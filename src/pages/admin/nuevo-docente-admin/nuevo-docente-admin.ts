import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NuevoDocenteAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nuevo-docente-admin',
  templateUrl: 'nuevo-docente-admin.html',
})
export class NuevoDocenteAdminPage {

  testCheckboxOpen: boolean;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoDocenteAdminPage');
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Asigne al docente a un grupo.');

    alert.addInput({
      type: 'checkbox',
      label: 'Grupo 1',
      value: 'value1',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Grupo 2',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Grupo 3',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Grupo 4',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Grupo 5',
      value: 'value2'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Agregar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
