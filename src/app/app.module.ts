import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Musicpage } from '../pages/music/music';
import { Newspage } from '../pages/news/news';
import { VideoPage } from '../pages/video/video';
import { TabsPage } from '../pages/tabs/tabs';
import {IntroPage} from '../pages/intro/intro';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Musicpage,
    Newspage,
    VideoPage,
    TabsPage,
    IntroPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Newspage,
    VideoPage,
    TabsPage,
    Musicpage,
    IntroPage,
    LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
