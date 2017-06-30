import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, list } from 'ionic-angular';
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

@ViewChild('scheduleList', { read: List }) scheduleList: List;

  excludeTracks: any = [];
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoAdminPage');
     this.updateSchedule();

    
  }

   updateSchedule() {
    // Close any open sliding items when the schedule updates
    this.scheduleList && this.scheduleList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  gotoMateriaAdmin(){
    this.navCtrl.push("MateriaAdminPage");
   
  }
  
  
  AlumnosGrupoAdmin() {
    let modal = this.modalCtrl.create(AlumnosGrupoAdminPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });

  }

}
