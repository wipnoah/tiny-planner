import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { BacklogComponent } from './backlog/backlog.component';

const appRoutes: Routes = [
  {path: 'notes', component : NotesComponent},
  {path: 'todo-list', component : TodoListComponent},
  {path: 'backlog', component : BacklogComponent},
  {path: 'addressbook', component: AddressBookComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TodoListComponent,
    AddressBookComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
