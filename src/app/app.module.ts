import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUs } from '../pages/about-us/about-us';
import { ContactUs } from '../pages/contact-us/contact-us';
import { Quote } from '../pages/quote/quote';
import { ListPage } from '../pages/list/list';
import { Services } from '../pages/services/services';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SnapPest } from '../pages/snap-pest/snap-pest';
import { SnapPestInfo } from '../pages/snap-pest-info/snap-pest-info';
import { Camera } from '@ionic-native/camera';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    ContactUs,
    Quote,
    Services,
    SnapPest,
    SnapPestInfo
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    ContactUs,
    Quote,
    Services,
    SnapPest,
    SnapPestInfo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
