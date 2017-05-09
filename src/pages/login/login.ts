import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  toolbarCheck:boolean = true;
  loginInfo = {};
  stores = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toolbarCheck = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  
  submit() {
    console.log(this.loginInfo);
    this.navCtrl.setRoot(this.stores)
  }

}
