import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit {

  // Input params.
  @Input('editorContent') Content: any;
  @Input('secondaryEditorContent') secondaryContent: any;
  @Input('editorId') id: string;

  // Output params.
  @Output() EditorInitialize = new EventEmitter<any>();
  @Output() EditorTextChanged = new EventEmitter<any>();
  @Output() EditorBlur = new EventEmitter<any>();
  @Output() charCount = new EventEmitter<{ 'charCounted': number }>();
  @Output() secondaryCharCount = new EventEmitter<{ 'secondaryCharCounted': number }>();

  // Acess template refrence.
  @ViewChild('richTextEditor') richTextEditor: ElementRef;
  constructor() {
    console.log('INSIDE RICH TEXT EDITOR CONSTRUCTOR-->', this.id);
  }

  ngOnInit() {
  }

  onEditorInitialize(event) {
    console.log('INSIDE onEditorInitialize-->', event);
  }

  onEditorTextChanged(event) {
    console.log('INSIDE onEditorTextChanged-->', event);

    // let editorData = HTMLInputElement

    console.log('=======EMIT 1ST EDITOR=======>');
    this.charCount.emit({
      'charCounted': event && event.textValue &&
        event.textValue.length ? event.textValue.length : 0
    });

    // string.indexOf(substring) !== -1;

    console.log('=======EMIT 2ND EDITOR=======>');
    this.secondaryCharCount.emit({
      'secondaryCharCounted': event && event.textValue &&
        event.textValue.length ? event.textValue.length : 0
    });


    console.log('Char count emited from rich text editor...!');
  }

  private onEditorBlur(event) {
    console.log('INSIDE onEditorBlur-->', event);
  }

}
