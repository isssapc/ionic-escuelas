import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { GruposAdminPage } from "../pages/admin/grupos-admin/grupos-admin";
import { DocentesAdminPage } from "../pages/admin/docentes-admin/docentes-admin";
import { AlumnosAdminPage } from "../pages/admin/alumnos-admin/alumnos-admin";
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ForosAlumnoPage } from "../pages/alumno/foros-alumno/foros-alumno";
import { MensajesAlumnoPage } from "../pages/alumno/mensajes-alumno/mensajes-alumno";
import { TareasAlumnoPage } from "../pages/alumno/tareas-alumno/tareas-alumno";
import { CalendarioAlumnoPage } from "../pages/alumno/calendario-alumno/calendario-alumno";
import { PerfilAlumnoPage } from "../pages/alumno/perfil-alumno/perfil-alumno";
import { GruposDocentePage } from "../pages/docente/grupos-docente/grupos-docente";
import { PerfilDocentePage } from "../pages/docente/perfil-docente/perfil-docente";
import { NuevoGrupoAdminPage } from "../pages/admin/nuevo-grupo-admin/nuevo-grupo-admin";
import { NuevoAlumnoAdminPage } from "../pages/admin/nuevo-alumno-admin/nuevo-alumno-admin";
import { NuevoDocenteAdminPage } from "../pages/admin/nuevo-docente-admin/nuevo-docente-admin";

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    GruposAdminPage,
    DocentesAdminPage,
    AlumnosAdminPage,

    ForosAlumnoPage,
    MensajesAlumnoPage,
    TareasAlumnoPage,
    CalendarioAlumnoPage,
    PerfilAlumnoPage,
    GruposDocentePage,
    PerfilDocentePage,
    NuevoGrupoAdminPage,
    NuevoAlumnoAdminPage,
    NuevoDocenteAdminPage


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: GruposAdminPage, name: 'GruposAdminPage', segment: 'grupos-admin' },
        { component: DocentesAdminPage, name: 'DocentesAdminPage', segment: 'docentes-admin' },
        { component: AlumnosAdminPage, name: 'AlumnosAdminPage', segment: 'alumnos-admin' },
        
        { component: ForosAlumnoPage, name: 'ForosAlumnoPage', segment: 'foros-alumno' },
        { component: MensajesAlumnoPage, name: 'MensajesAlumnoPage', segment: 'mensaje-alumno' },
        { component: TareasAlumnoPage, name: 'TareasAlumnoPage', segment: 'tareas-alumno' },
        { component: CalendarioAlumnoPage, name: 'CalendarioAlumnoPage', segment: 'calendario-alumno' },
        { component: PerfilAlumnoPage, name: 'PerfilAlumnoPage', segment: 'perfil-alumno' },
        { component: GruposDocentePage, name: 'GruposDocentePage', segment: 'grupos-docente' },
        { component: PerfilDocentePage, name: 'PerfilDocentePage', segment: 'perfil-docente' },
        { component: NuevoGrupoAdminPage, name: 'NuevoGrupoAdminPage', segment: 'nuevo-grupo-admin' },
        { component: NuevoAlumnoAdminPage, name: 'NuevoAlumnoAdminPage', segment: 'nuevo-alumno-admin' },
        { component: NuevoDocenteAdminPage, name: 'NuevoDocenteAdminPage', segment: 'nuevo-docente-admin' }

        
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    GruposAdminPage,
    DocentesAdminPage,
    AlumnosAdminPage,
    ForosAlumnoPage,
    MensajesAlumnoPage,
    TareasAlumnoPage,
    CalendarioAlumnoPage,
    PerfilAlumnoPage,
    GruposDocentePage,
    PerfilDocentePage,
    NuevoGrupoAdminPage,
    NuevoAlumnoAdminPage,
    NuevoDocenteAdminPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
