import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var Quill: any;

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})

export class EditorPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorPage');

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
    var quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });
    
  }

}
