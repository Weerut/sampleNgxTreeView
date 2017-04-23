import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookComponent } from './book/book.component';

import { TreeviewModule } from 'ngx-treeview';

import { AppComponent } from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TreeviewModule.forRoot()
  ],
  declarations: [
    BookComponent,
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
