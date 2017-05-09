import { PaymentMethod } from './../payment-method/payment-method';
import { BasketItem } from './../../app/Model/BasketItem';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the Purchase page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class Purchase {
  paymentMethod = PaymentMethod
  list: Array<BasketItem> = new Array<BasketItem>();
  data: any;
  name:any;
  totalPrice: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

    this.data = this.navParams.get('data');
    this.name = this.navParams.get('name');

    

    for (var index = 0; index < this.data.basketList.length; index++) {
      this.totalPrice += this.data.basketList[index].price;
      this.list.push(this.data.basketList[index]);

    }

  }

  removeItem(index,data) {
    this.totalPrice -= data.price;
    if(this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    this.list.splice(index,1);
  }

  openPaymentMethod() {
    this.navCtrl.push(this.paymentMethod, {
      name: this.name,
      totalPrice: this.totalPrice,
    });
  }



}
