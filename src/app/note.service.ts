import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {

  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { 
  	this.getAllNotes();
  }

  updateData(newData:any):void{
  // 	const tempData = this.data.getValue();
  // 	// console.log('tempData', tempData);
  // 	tempData.push(newData);
  	this.data.next(newData);
  }
  postNote(note){
  	console.log("in the service's postNote method");
  	console.log(note);
  	this._http.post('https://5a690b2778f25e00122ad215.mockapi.io/notes', note).subscribe(()=>{
  		this.getAllNotes();
  	})
  }
  getAllNotes(){
  	this._http.get('https://5a690b2778f25e00122ad215.mockapi.io/notes').subscribe((responseData:any)=>{
  		console.log('got all notes', responseData);
  		// this.data.next(responseData);
  		this.updateData(responseData);
  	})
  }

}
