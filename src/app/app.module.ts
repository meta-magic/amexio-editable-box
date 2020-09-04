import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmexioEditableBoxComponent } from './component/amexio-editable-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AmexioEditableBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
