import {
  BrowserModule,
  HammerModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HammerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
