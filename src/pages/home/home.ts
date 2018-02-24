import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Quill } from 'quill';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) 
	{
		window.localStorage.setItem("editorProject", "{}");
  	}

  	openMain()
  	{
  		this.navCtrl.setRoot(MainPage);
  	}

}
