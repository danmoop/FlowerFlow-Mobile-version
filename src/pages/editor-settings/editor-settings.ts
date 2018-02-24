import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditorPage } from '../editor/editor';

@IonicPage()
@Component({
  selector: 'page-editor-settings',
  templateUrl: 'editor-settings.html',
})
export class EditorSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorSettingsPage');
  }

  editSettings()
  {
      let presentation = {
          title: (<HTMLInputElement>document.getElementById("title")).value,
          description: (<HTMLInputElement>document.getElementById("desc")).value
      }

      window.localStorage.setItem("editorProject", JSON.stringify(presentation));

      this.navCtrl.push(EditorPage);
  }

}
