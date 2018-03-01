import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideEditorPage } from './slide-editor';

@NgModule({
  declarations: [
    SlideEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideEditorPage),
  ],
})
export class SlideEditorPageModule {}
