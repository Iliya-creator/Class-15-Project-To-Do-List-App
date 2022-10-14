import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { HeaderComponent } from './header/header.component';
import { ToDoComponent } from './to-do-list/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoFormComponent,
    HeaderComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
