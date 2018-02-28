import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slide } from 'ionic-angular';
import { Presentation } from '../../model/presentation';
import { EditorSettingsPage } from '../editor-settings/editor-settings';
import { _Slide } from './../../model/slide';

declare var Quill: any;

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})

export class EditorPage 
{
  
  public editorHeader;
  private _projectSlides;
  private project;

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) 
    {	
        this.project = JSON.parse(window.localStorage.getItem('editorProject'));
        this.editorHeader = this.project.projectTitle;
        this._projectSlides = this.project.projectSlides;


        let allProjects = JSON.parse(window.localStorage.getItem('allProjects'));

        for(var i = 0; i < allProjects.length; i++)
        {
            if(this.project.projectTitle == allProjects[i].projectTitle)
            {
                this._projectSlides = allProjects[i].projectSlides;
            }
        }
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

    addSlide()
    {
        this.alertCtrl.create({
            title: 'Type in slide name',
            inputs: [
              {
                name: 'slidename',
                placeholder: 'Slide name'
              }
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Create',
                handler: data => {
                    let slide = new _Slide(data.slidename);
                    
                    window.localStorage.setItem('editorProject', JSON.stringify(this.project));
                    let allProjects = JSON.parse(window.localStorage.getItem('allProjects'));
            
                    for(var i = 0; i < allProjects.length; i++)
                    {
                        if(this.project.projectTitle == allProjects[i].projectTitle)
                        {
                            allProjects[i].projectSlides.push(slide);
                            this._projectSlides = allProjects[i].projectSlides;
                            this.project.projectSlides.push(slide);
                            window.localStorage.setItem('allProjects', JSON.stringify(allProjects));
                        }
                    }
                }
              }
            ]
          }).present();
    }
}
