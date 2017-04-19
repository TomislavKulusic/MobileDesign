import { Purchase } from './../purchase/purchase';
import { BasketItem } from './../../app/Model/BasketItem';
import { Grocery } from './../../app/Model/Grocery';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Basket } from "../../app/Model/Basket";

/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-store-page',
  templateUrl: 'store-page.html',
})
export class StorePage {

  PurchasePage = Purchase;
  currentStore: any;
  grocery: Grocery;
  groceries: Array<Grocery>;
  additem: number = 0;
  basketItem: BasketItem;
  basket: Basket = new Basket();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentStore = JSON.parse(localStorage.getItem("store"));
    this.listGroceries();
  }
  listGroceries() {
    this.groceries = new Array<Grocery>();

    for (var index = 0; index < this.currentStore["groceries"].length; index++) {

      console.log(this.currentStore["groceries"][index]);
      this.grocery = new Grocery();
      this.grocery.img = this.currentStore["groceries"][index].img;
      this.grocery.name = this.currentStore["groceries"][index].name;
      this.grocery.price = this.currentStore["groceries"][index].price;

      this.groceries.push(this.grocery);
    }
  }
  add(item) {
    this.additem++;
    this.basketItem = new BasketItem();
    console.log(item);
    this.basketItem.name = item.name;
    this.basketItem.price = item.price;
    this.basketItem.image = item.img;

    this.basket.basketList.push(this.basketItem);
  }
  purchase() {
    this.navCtrl.push(this.PurchasePage, {
      data: this.basket
    });
  }
}
