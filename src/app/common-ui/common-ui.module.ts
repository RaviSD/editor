import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorModule} from 'primeng/editor';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    EditorModule // <----- Import prime ng editor module here.
  ],
  declarations: [RichTextEditorComponent],
  exports: [RichTextEditorComponent]// <---- We need to export our component, to use in out side of this module.
})
export class CommonUiModule { }
