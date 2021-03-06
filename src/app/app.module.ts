import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndModule } from '@beyerleinf/ngx-dnd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
