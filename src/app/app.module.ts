import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { LoginProvider } from '../providers/login/login';
import { HttpClientModule } from '@angular/common/http';
import { ListaPiusProvider } from '../providers/lista-pius/lista-pius';
import { ListaUsuariosProvider } from '../providers/lista-usuarios/lista-usuarios';
import { CadastrarProvider } from '../providers/cadastrar/cadastrar';
import { SocialSharing } from '@ionic-native/social-sharing'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    LoginProvider,
    ListaPiusProvider,
    ApiServiceProvider,
    ListaUsuariosProvider,
    CadastrarProvider,
    SocialSharing,
  ]
})
export class AppModule {}
