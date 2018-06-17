import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorModule} from 'primeng/editor';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    EditorModule
  ],
  declarations: [RichTextEditorComponent],
  exports: [RichTextEditorComponent]
})
export class CommonUiModule { }
