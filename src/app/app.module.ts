import { LocalNotifications } from '@ionic-native/local-notifications';
import { PurchaseHistory } from './../pages/purchase-history/purchase-history';
import { Login } from './../pages/login/login';
import { FinishPayment } from './../pages/finish-payment/finish-payment';
import { Purchase } from './../pages/purchase/purchase';
import { StorePage } from './../pages/store-page/store-page';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StorePage,
    Purchase,
    
    FinishPayment,
    Login,
    PurchaseHistory
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StorePage,
    Purchase,
    
    FinishPayment,
    Login,
    PurchaseHistory
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
