import { Grocery } from './../../app/Model/Grocery';
import { StorePage } from './../store-page/store-page';
import { Store } from './../../app/Model/Store';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as json from './../../assets/json/data.json';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  storePage = StorePage;
  data: any = json;
  store: Store;
  stores: Array<Store> = new Array<Store>();
  grocery: Grocery;

  constructor(public navCtrl: NavController) {
    localStorage.clear();
    this.getData();
  }
  getData() {
    for (var index = 0; index < this.data.length; index++) {

      this.store = new Store();

      this.store.name = this.data[index].name;
      this.store.address = this.data[index].address;
      this.store.image = this.data[index].image;

      for (var counter = 0; counter < this.data[index]["items"].length; counter++) {

        for (var c = 0; c < this.data[index]["items"][counter]["items"].length; c++) {
          this.grocery = new Grocery();
          this.grocery.img = this.data[index]["items"][counter]["items"][c].img;
          this.grocery.name = this.data[index]["items"][counter]["items"][c].name;
          this.grocery.price = this.data[index]["items"][counter]["items"][c].price;
          this.store.groceries.push(this.grocery);

        }
      }
      this.stores.push(this.store);
    }
  }
  openStore(storeData) {
    localStorage.clear();
    localStorage.setItem("store", JSON.stringify(storeData));
    this.navCtrl.setRoot(this.storePage);
  }

}
