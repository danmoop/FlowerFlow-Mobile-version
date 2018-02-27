import {  Component } from '@angular/core';
import { IonicPage,  NavController, NavParams, AlertController } from 'ionic-angular';
import { EditorPage } from '../editor/editor';
import { Presentation } from '../../model/presentation';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-editor-settings',
  templateUrl: 'editor-settings.html',
})

export class EditorSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() 
  {
      console.log('ionViewDidLoad EditorSettingsPage');
  }

  editSettings() {
      let presentation = {
          title: ( < HTMLInputElement > document.getElementById("title")).value,
          description: ( < HTMLInputElement > document.getElementById("desc")).value
      }

      window.localStorage.setItem("editorProject", JSON.stringify(presentation));

      let allProj = JSON.parse(window.localStorage.getItem("allProjects"));

      let editorProj = JSON.parse(window.localStorage.getItem("editorProject"));

      let existingProject = null;

      for (var i = 0; i < allProj.length; i++) {
          if (editorProj.title == allProj[i].projectTitle) {
              existingProject = allProj[i];

              this.alertCtrl.create({
                  title: 'Project with this name already exists',
                  buttons: ['OK']
              }).present();
          }
      }

      if (existingProject == null) {
          let project = JSON.parse(window.localStorage.getItem("editorProject")); // This is temporarly stored in storage for getting project object from editor-settings.js page and using on this (editor.js)

          let allProjects = JSON.parse(window.localStorage.getItem("allProjects")); // Place where all the project stored
          let presentation = new Presentation(project.title, project.description, []); // Creating new presentation using data from what we put in input (project title and description)

          allProjects.push(presentation);
          window.localStorage.setItem("allProjects", JSON.stringify(allProjects));

          this.navCtrl.setRoot(MainPage);
      }
  }

}