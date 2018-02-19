import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Presentation } from '../../model/presentation';
import { _Slide } from '../../model/slide';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditorPage } from '../editor/editor';

@IonicPage()
@Component({
	selector: 'page-main',
	templateUrl: 'main.html',
})

export class MainPage 
{

	private allProjects: JSON;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) 
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
		if(this.allProjects == null)
		{
			window.localStorage.setItem("allProjects", JSON.stringify(new Array()));
		}

		let projects = JSON.parse(window.localStorage.getItem("allProjects"));

		let presentation = new Presentation("titl", "desc", new Array<_Slide>());

		projects.push(presentation);
		
		window.localStorage.setItem("allProjects", JSON.stringify(projects));

		this.allProjects = JSON.parse(window.localStorage.getItem("allProjects"));
	}

	clearStorage()
	{
		/*this.allProjects = null;
		window.localStorage.clear();*/

		let alert = this.alertCtrl.create({
			title: 'Confirm delete',
			message: 'Do you want to delete this project?',
			buttons: [
			  {
				text: 'Yes',
				role: 'cancel',
				handler: () => {
					this.alertCtrl.create({
						title: 'Projects deleted',
						buttons: ['Ok']
					}).present();

					this.allProjects = null;
					window.localStorage.clear();
				}
			  },
			  {
				text: 'No',
				handler: () => {
				}
			  }
			]
		  });
		  alert.present();
	}

	createProject()
	{
		this.navCtrl.push(EditorPage);
	}
}