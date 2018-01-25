import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote: object = {content: "", description: ""};

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }
  submitNote(){
  	console.log('submitted a note', this.newNote);
  	this._noteService.postNote(this.newNote);
  }

}
