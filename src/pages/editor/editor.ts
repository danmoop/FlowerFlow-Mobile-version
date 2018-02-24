import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Presentation } from '../../model/presentation';
import { EditorSettingsPage } from '../editor-settings/editor-settings';

declare var Quill: any;

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})

export class EditorPage 
{
  
  public editorHeader;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) 
  {
	  let project = JSON.parse(window.localStorage.getItem("editorProject")); // This is temporarly stored in storage for getting project object from editor-settings.js page and using on this (editor.js)
      
      let allProjects = JSON.parse(window.localStorage.getItem("allProjects")); // Place where all the project stored

	  let presentation = new Presentation(project.title, project.description, []); // Creating new presentation using data from what we put in input (project title and description)
	  
	  this.editorHeader = project.title; // set project's title on html page span (on the top)

	  allProjects.push(presentation);
	  window.localStorage.setItem("allProjects", JSON.stringify(allProjects));

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad EditorPage');
  }

  displayEditor()
  {
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

	  var quill = new Quill('#editor', 
	  {
		modules: 
		{
		  toolbar: toolbarOptions
		},
		theme: 'snow'
	  });
	  

	  /*
		HTML Editor code:
		 
		<div id="editor">
			<p>Welcome to editor!</p>
		</div>
	 
	  */

  }

}
