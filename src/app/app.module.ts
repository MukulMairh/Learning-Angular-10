import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../app/pages/pages.module';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([]), PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
