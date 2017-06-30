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
import { GrupoDocentePage } from "../pages/docente/grupo-docente/grupo-docente";
import { MateriaDocentePage } from "../pages/docente/materia-docente/materia-docente";
import { NuevoForoDocentePage } from "../pages/docente/nuevo-foro-docente/nuevo-foro-docente";
import { NuevaTareaDocentePage } from "../pages/docente/nueva-tarea-docente/nueva-tarea-docente";
import { TareaDocentePage } from "../pages/docente/tarea-docente/tarea-docente";
import { NuevoMensajeDocentePage } from "../pages/docente/nuevo-mensaje-docente/nuevo-mensaje-docente";
import { DiaCalendarioAlumnoPage } from "../pages/alumno/dia-calendario-alumno/dia-calendario-alumno";
import { TareaAlumnoPage } from "../pages/alumno/tarea-alumno/tarea-alumno";
import { NuevoMensajeAlumnoPage } from "../pages/alumno/nuevo-mensaje-alumno/nuevo-mensaje-alumno";
import { MensajeAlumnoPage } from "../pages/alumno/mensaje-alumno/mensaje-alumno";
import { ForoAlumnoPage } from "../pages/alumno/foro-alumno/foro-alumno";
import { ConversacionForoAlumnoPage } from "../pages/alumno/conversacion-foro-alumno/conversacion-foro-alumno";
import { NuevoMensajeForoAlumnoPage } from "../pages/alumno/nuevo-mensaje-foro-alumno/nuevo-mensaje-foro-alumno";
import { GrupoAdminPage } from "../pages/admin/grupo-admin/grupo-admin";
import { AlumnoAdminPage } from "../pages/admin/alumno-admin/alumno-admin";
import { DocenteAdminPage } from "../pages/admin/docente-admin/docente-admin";
import { MateriaAdminPage } from "../pages/admin/materia-admin/materia-admin";
import { ForoDocentePage } from "../pages/docente/foro-docente/foro-docente";
import { ConversacionForoDocentePage } from "../pages/docente/conversacion-foro-docente/conversacion-foro-docente";
import { MensajeDocentePage } from "../pages/docente/mensaje-docente/mensaje-docente";
import { AlumnosGrupoAdminPage } from "../pages/admin/alumnos-grupo-admin/alumnos-grupo-admin";


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
    NuevoDocenteAdminPage,
    GrupoDocentePage,
    MateriaDocentePage,
    NuevoForoDocentePage,
    NuevaTareaDocentePage,
    TareaDocentePage,
    NuevoMensajeDocentePage,
    DiaCalendarioAlumnoPage,
    TareaAlumnoPage,
    NuevoMensajeAlumnoPage,
    MensajeAlumnoPage,
    ForoAlumnoPage,
    ConversacionForoAlumnoPage,
    NuevoMensajeForoAlumnoPage,
    GrupoAdminPage,
    AlumnoAdminPage,
    DocenteAdminPage,
    MateriaAdminPage,
    ForoDocentePage,
    ConversacionForoDocentePage,
    MensajeDocentePage,
    AlumnosGrupoAdminPage
    
    


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
        { component: NuevoDocenteAdminPage, name: 'NuevoDocenteAdminPage', segment: 'nuevo-docente-admin' },
        { component: GrupoDocentePage, name: 'GrupoDocentePage', segment: 'grupo-docente' },
        { component: MateriaDocentePage, name: 'MateriaDocentePage', segment: 'materia-docente' },
        { component: NuevoForoDocentePage, name: 'NuevoForoDocentePage', segment: 'Nuevo-foro-docente' },
        { component: NuevaTareaDocentePage, name: 'NuevaTareaDocentePage', segment: 'nueva-tarea-docente' },
        { component: TareaDocentePage, name: 'TareaDocentePage', segment: 'nueva-tarea-docente' },
        { component: NuevoMensajeDocentePage, name: 'NuevoMensajeDocentePage', segment: 'nuevo-mensaje-docente' },
        { component: DiaCalendarioAlumnoPage, name: 'DiaCalendarioAlumnoPage', segment: 'dia-calendario-alumno' },
        { component: TareaAlumnoPage, name: 'TareaAlumnoPage', segment: 'tarea-alumno' },
        { component: NuevoMensajeAlumnoPage, name: 'NuevoMensajeAlumnoPage', segment: 'Nuevo-mensaje-alumno' },
        { component: MensajeAlumnoPage, name: 'MensajeAlumnoPage', segment: 'mensaje-alumno' },
        { component: ForoAlumnoPage, name: 'ForoAlumnoPage', segment: 'foro-alumno' },
        { component: ConversacionForoAlumnoPage, name: 'ConversacionForoAlumnoPage', segment: 'conversacion-foro-alumno' },
        { component: NuevoMensajeForoAlumnoPage, name: 'NuevoMensajeForoAlumnoPage', segment: 'nuevo-mensaje-foro-alumno' },
        { component: GrupoAdminPage, name: 'GrupoAdminPage', segment: 'grupo-admin' },
        { component: AlumnoAdminPage, name: 'AlumnoAdminPage', segment: 'alumno-admin' },
        { component: DocenteAdminPage, name: 'DocenteAdminPage', segment: 'docente-admin' },
        { component: MateriaAdminPage, name: 'MateriaAdminPage', segment: 'materia-admin' },
        { component: ForoDocentePage, name: 'ForoDocentePage', segment: 'Foro-docente' },
        { component: ConversacionForoDocentePage, name: 'ConversacionForoDocentePage', segment: 'conversacion-foro-doncente' },
        { component: MensajeDocentePage, name: 'MensajeDocentePage', segment: 'mensaje-docente' },
        { component: AlumnosGrupoAdminPage, name: 'AlumnosGrupoAdminPage', segment: 'alumnos-grupo-admin' },
        




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
    NuevoDocenteAdminPage,
    GrupoDocentePage,
    MateriaDocentePage,
    NuevoForoDocentePage,
    NuevaTareaDocentePage,
    TareaDocentePage,
    NuevoMensajeDocentePage,
    DiaCalendarioAlumnoPage,
    TareaAlumnoPage,
    NuevoMensajeAlumnoPage,
    MensajeAlumnoPage,
    ForoAlumnoPage,
    ConversacionForoAlumnoPage,
    NuevoMensajeForoAlumnoPage,
    GrupoAdminPage,
    AlumnoAdminPage,
    DocenteAdminPage,
    MateriaAdminPage,
    ForoDocentePage,
    ConversacionForoDocentePage,
    MensajeDocentePage,
    AlumnosGrupoAdminPage
        

    
    


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
