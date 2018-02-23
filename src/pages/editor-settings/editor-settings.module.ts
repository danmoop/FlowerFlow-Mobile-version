import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorSettingsPage } from './editor-settings';

@NgModule({
  declarations: [
    EditorSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorSettingsPage),
  ],
})
export class EditorSettingsPageModule {}
