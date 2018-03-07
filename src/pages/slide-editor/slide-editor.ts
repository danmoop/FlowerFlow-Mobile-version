import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

declare var Quill: any;

@IonicPage()
@Component({
  selector: 'page-slide-editor',
  templateUrl: 'slide-editor.html',
})
export class SlideEditorPage {

	public slideName;
	private slideObject;
	private quill;
	private allProjects;
	private project;

	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) 
	{
		this.slideObject = JSON.parse(window.localStorage.getItem('slideObject'));
		this.slideName = this.slideObject.name;
		this.allProjects = JSON.parse(window.localStorage.getItem('allProjects'));
		this.project = JSON.parse(window.localStorage.getItem('editorProject'));
	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad SlideEditorPage');

		var toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],        
			['blockquote', 'code-block'],
			[{ 'header': 1 }, { 'header': 2 }],             
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],     
			[{ 'indent': '-1'}, { 'indent': '+1' }],        
			[{ 'direction': 'rtl' }],                         
			[{ 'size': ['small', false, 'large', 'huge'] }],  
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			[{ 'color': [] }, { 'background': [] }],          
			[{ 'font': [] }],
			[{ 'align': [] }],
			['clean']
		];
		
		this.quill = new Quill('#editor', {
			modules: {
			toolbar: toolbarOptions
			},
			theme: 'snow'
		});

		if(this.slideObject.content == "")
			this.quill.setText("Hello! Start by typing here!");
		else
		{

			/*
			Actually, I had another function:
			this.quill.clipboard.dangerouslyPasteHTML(this.slideObject.content);

			but it didn't refresh content after leaving editor. I had to refresh page.
			So in order to fix that, I get information not from slide object, but 
			from the projects array
			*/

			for(var i = 0; i < this.allProjects.length; i++)
			{
				for(var w = 0; w < this.allProjects[i].projectSlides.length; w++)
				{
					if(this.slideObject.name == this.allProjects[i].projectSlides[w].name)
					{
						this.quill.clipboard.dangerouslyPasteHTML(this.allProjects[i].projectSlides[w].content);
					}
				}
			}
		}
	}

	saveChanges()
	{
		let slideContent = this.quill.container.firstChild.innerHTML;
		
		this.slideObject.content = slideContent;

		for(var i = 0; i < this.allProjects.length; i++)
		{
			for(var w = 0; w < this.allProjects[i].projectSlides.length; w++)
			{
				if(this.slideObject.name == this.allProjects[i].projectSlides[w].name)
				{
					this.allProjects[i].projectSlides[w] = this.slideObject;
	
					window.localStorage.setItem('allProjects', JSON.stringify(this.allProjects));
					window.localStorage.setItem('slideObject', JSON.stringify(this.slideObject));
				}
			}
		}

		this.alertCtrl.create({
			title: 'Changes saved!',
			buttons: ['OK']
		}).present();
	}
}