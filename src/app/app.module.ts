import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteNewComponent } from './note-new/note-new.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
