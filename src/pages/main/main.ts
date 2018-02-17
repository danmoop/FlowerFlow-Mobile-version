import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Presentation } from '../../model/presentation';
import { _Slide } from '../../model/slide';

@IonicPage()
@Component({
	selector: 'page-main',
	templateUrl: 'main.html',
})
export class MainPage 
{

	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
	}
		
	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad MainPage');
	}

}
