import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Quill } from 'quill';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) 
	{
  	}

  	openMain()
  	{
  		this.navCtrl.setRoot(MainPage);
  	}

}
