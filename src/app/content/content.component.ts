import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // Public members.
  public content: string;
  public firstEditor: string;
  public charCounter: number;

  public secondEditor: string;
  public secondaryContent: string;
  public secondaryCharCounter: number;

  constructor() {
    console.log('INSIDE CONTENT CONSTRUCTOR->');
    this.firstEditor = 'myEditor';
    this.content = 'This si text editor content';
    this.charCounter = 0;
    this.secondEditor = 'mysecondEditor';
    this.secondaryContent = 'This si second text editor content';
    this.secondaryCharCounter = 0;
   }

  ngOnInit() {
  }

  onEditorInitialize (event) {
    console.log('INSIDE ContentComponent onEditorInitialize-->');
  }

  onEditorTextChanged_1 (event) {
    console.log('INSIDE ContentComponent onEditorTextChanged---->', event.charCounted);
    this.charCounter = event.charCounted ? event.charCounted : 0;
  }

  private onEditorBlur (event) {
    console.log('INSIDE ContentComponent onEditorBlur------>');
  }

  private onCharCount (event) {
    console.log('INSIDE ContentComponent onCharCount------>', event );
    //, event.charCounted);
    this.charCounter = event.charCounted ? event.charCounted : 0;
    this.secondaryCharCounter = event.secondaryCharCounted ? event.secondaryCharCounted : 0;
    
  }

  private onsecondaryCharCount (event) {
    console.log('INSIDE ContentComponent onCharCount------>', event );
    //, event.charCounted);
    this.secondaryCharCounter = event.secondaryCharCounted ? event.secondaryCharCounted : 0;
    
  }

  
}
