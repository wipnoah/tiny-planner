import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { BacklogComponent } from './backlog/backlog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TodoListComponent,
    AddressBookComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
