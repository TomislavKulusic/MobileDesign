import { FinishPayment } from './../finish-payment/finish-payment';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentMethod page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethod {

  finishPayment = FinishPayment;
  name:any;
  totalPrice:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalPrice = this.navParams.get('totalPrice');
    this.name = this.navParams.get('name');

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethod');
  }


  check(option) {
    this.navCtrl.push(this.finishPayment, {
      data: option,
      totalPrice:this.totalPrice,
      name:this.name
    });
  }

}
