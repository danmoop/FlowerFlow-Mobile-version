import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slide } from 'ionic-angular';
import { Presentation } from '../../model/presentation';
import { EditorSettingsPage } from '../editor-settings/editor-settings';
import { SlideEditorPage } from '../slide-editor/slide-editor';
import { _Slide } from './../../model/slide';

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

    openSlideEditor(slide)
    {
        window.localStorage.setItem('slideObject', JSON.stringify(slide));

        this.navCtrl.push(SlideEditorPage);
    }
}
