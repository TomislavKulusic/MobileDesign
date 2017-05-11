import { LocalNotifications } from '@ionic-native/local-notifications';
import { Purchase } from './../../app/Model/Purchase';
import { StorePage } from './../store-page/store-page';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the FinishPayment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-finish-payment',
  templateUrl: 'finish-payment.html',
})
export class FinishPayment {

  store = StorePage;
  data: any;
  name: any;
  totalPrice: any;

  purchase: Purchase;
  historyList: Array<Purchase>;
  history: any;
  newPurchase: Purchase;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications, public alertCtrl: AlertController) {

    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification'
    });


    this.history = JSON.parse(localStorage.getItem("purchase"));
    if (this.history === null) {
      this.historyList = new Array<Purchase>();
    } else {
      console.log(this.history);
      this.historyList = new Array<Purchase>();

      for (var index = 0; index < this.history.length; index++) {
        this.newPurchase = new Purchase();

        this.newPurchase.price = this.history[index].price;

        this.historyList.push(this.newPurchase);

      }




    }

    //console.log(this.historyList);




    this.data = this.navParams.get('data');
    this.totalPrice = this.navParams.get('totalPrice');

  }

  getCard(smth) {
    console.log(smth)
  }

  gotoStore() {

    this.purchase = new Purchase();
    this.purchase.price = this.totalPrice;
    this.historyList.push(this.purchase);
    localStorage.setItem("purchase", JSON.stringify(this.historyList));

    let alert = this.alertCtrl.create({
      title: 'Purchase completed',
      subTitle: 'You have sucessfully purchased',
      buttons: ['OK']
    });
    alert.present();



    this.navCtrl.setRoot(this.store)
  }


}
