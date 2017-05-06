import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutUs } from '../pages/about-us/about-us';
import { ContactUs } from '../pages/contact-us/contact-us';
import { Quote } from '../pages/quote/quote';
import { Services } from '../pages/services/services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  navPages: Array<{title: string, component: any}>;
  picPages: Array<{title: string, component: any}>;
  pestPages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.navPages = [
      { title: 'Home', component: HomePage },
      { title: 'Services', component: Services },
      { title: 'About Us', component: AboutUs },
      { title: 'Contact Us', component: ContactUs }
    ];


    this.pestPages = [
      { title: 'Termites', component: HomePage },
      { title: 'Rats', component: Services },
      { title: 'Bees', component: AboutUs },
      { title: 'Gophers', component: ContactUs },
      { title: 'Ants', component: HomePage },
      { title: 'Fire Ants', component: Services },
      { title: 'Bed Bugs', component: AboutUs },
      { title: 'Spiders', component: ContactUs },
       { title: 'Mice', component: ContactUs }
    ];

this.picPages = [
      { title: 'Snap a Pest!', component: Quote }
    ]

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
