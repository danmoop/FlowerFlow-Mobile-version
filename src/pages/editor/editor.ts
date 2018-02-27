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
