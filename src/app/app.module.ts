import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ContentComponent } from './content/content.component';
import { CommonUiModule } from './common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule	//<---- This is shared module where we kept out editor code in component.
					// There are two component in two different module, We can not share data directly.
					// Instead of that we hve to share module, so we importing in app.module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
