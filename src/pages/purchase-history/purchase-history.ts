import { HomePage } from './../home/home';
import { Purchase } from './../../app/Model/Purchase';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PurchaseHistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-purchase-history',
  templateUrl: 'purchase-history.html',
})
export class PurchaseHistory {

  data: any;
  purchase: Purchase;
  list: Array<Purchase> = new Array<Purchase>();
  nothing: boolean = false;
  controller:NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.data = JSON.parse(localStorage.getItem("purchase"));
    this.controller = navCtrl;
    if (this.data === null) {
      this.nothing = true;
      this.doPrompt();
      
    } else {

      for (var index = 0; index < this.data.length; index++) {
        this.purchase = new Purchase();
        this.purchase.price = this.data[index].price;
        this.list.push(this.purchase);

      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseHistory');
  }

  doPrompt() {
     let alert = this.alertCtrl.create({
      title: 'No History',
      subTitle: 'There is no recored purchase, you will be redirected to Store page',
      buttons: ['OK']
    });
    alert.present();
    this.controller.setRoot(HomePage);
  }
  

  

}
