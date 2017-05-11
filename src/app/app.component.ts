import { StorePage } from './../pages/store-page/store-page';
import { PurchaseHistory } from './../pages/purchase-history/purchase-history';
import { Login } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;
  storePage:StorePage;

  pages: Array<{ title: string, component: any }>;
  categories: Array<string>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Stores', component: HomePage },
      { title: 'History', component: PurchaseHistory }


    ];

    this.categories = ["Show All","Fruit and Vegi","Drinks","Milk Products"];

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
    if (page === PurchaseHistory) {
      this.nav.push(page.component);
    } else {

      this.nav.setRoot(page.component);
    }
  }


}
