# Notes Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Description

This is an angular application with two components, Notes and NoteNew. Both components load a service NoteService. 

1. When the NotesComponent is created, it subscribes to the data property of the the NoteService and passes it a callback that says: “If this._noteService.data ever updates, update this.notes to be the updated value”
```javascript
#notes.component.ts line 12-17
ngOnInit(){
  	this._noteService.data.subscribe((data:any)=>{
  		console.log(data);
  		this.notes = data;
  	})
}```
2. The form is submitted, triggering the submitNote function on the component.
```javascript
#note-new.component.html lines 4-8
<form (submit)="submitNote()">
		<p>Content: <input type="text" name="content" [(ngModel)]="newNote.content"></p>
		<p>Description: <input type="text" name="description" [(ngModel)]="newNote.description"></p>
		<input type="submit" name="">
</form>```
3. The submitNote function calls the service’s postNote function, passing in the value of the new note to it.
```javascript
#note-new.component.ts line 16-19
submitNote(){
  	console.log('submitted a note', this.newNote);
  	this._noteService.postNote(this.newNote);
}```
4. The service makes a request to the API, passing the new note along with the POST request. It subscribes to the returned observable and passes in a callback saying: “If I get a response from the API, trigger my getAllNotes function.
```javascript
#note.service.ts lines 20-26
postNote(note){
  	console.log("in the service's postNote method");
  	console.log(note);
  	this._http.post('https://5a690b2778f25e00122ad215.mockapi.io/notes', note).subscribe(()=>{
  		this.getAllNotes();
	})
}```
5. The API sends a response, triggers getAllNotes and subscribes to it with a callback that says “If I get a response from the API, call updateData on the returned information”
```javascript
#note.service.ts lines 27-33
getAllNotes(){
  	this._http.get('https://5a690b2778f25e00122ad215.mockapi.io/notes').subscribe((responseData:any)=>{
  		console.log('got all notes', responseData);
  		// this.data.next(responseData);
  		this.updateData(responseData);
	})
}```

6. The API sends a response containing all of the notes, triggering updateData
```javascript
#note.service.ts line 31
this.updateData(responseData);```
7. updateData replaces the internal array of notes with the returned results from the API, triggering the subscription on 1.
```javascript
#note.service.ts lines 14-19
updateData(newData:any):void{
	this.data.next(newData);
}```
(note: steps six and seven can be combined as a part of the getAllNotes definition, like this)
```javascript
#note.service.ts lines 27-33
getAllNotes(){
  	this._http.get('https://5a690b2778f25e00122ad215.mockapi.io/notes').subscribe((responseData:any)=>{
  		console.log('got all notes', responseData);
  		// this.data.next(responseData);
  		this.data.next(responseData);
	})
}```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
