import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Presentation } from '../../model/presentation';
import { _Slide } from '../../model/slide';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
	selector: 'page-main',
	templateUrl: 'main.html',
})

export class MainPage 
{
	private allProjects: JSON;

	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.allProjects = JSON.parse(window.localStorage.getItem("allProjects"));

		if(this.allProjects == null)
		{
			window.localStorage.setItem("allProjects", JSON.stringify(new Array()));
		}
	}
		
	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad MainPage');
	}
	
	savePr()
	{
		let projects = JSON.parse(window.localStorage.getItem("allProjects"));

		let presentation = new Presentation("titl", "desc", new Array<_Slide>());

		projects.push(presentation);
		
		window.localStorage.setItem("allProjects", JSON.stringify(projects));
	}
}