import React, { Component } from 'react';
import Note from './Note.js';

class NoteBoard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        "notes": [{"id":1, "title": "#1"}],
        "count": 1
      };
      this.addNote = this.addNote.bind(this);
      this.saveChanges = this.saveChanges.bind(this);
    }



    saveChanges() {
      // Get a value saved in a form.
      var noteBoardState = this.state;
      // Check that there's some code there.
      if (!theValue) {
        message('Error: No value specified');
        return;
      }
      // Save it using the Chrome extension storage API.
      chrome.storage.sync.set({'noteBoardState': noteBoardState}, function() {
        // Notify that we saved.
        message('Settings saved');
      });
    }



  addNote() {
    // State change will cause component re-render
    console.log("addNote call");
    var newCount = this.state.count + 1;
    var newItemState = this.state.notes.concat([
        {id:newCount,name:"Another Name"}
    ]);
    console.log("set new state");
    this.setState({
      "notes": newItemState,
      "count": newCount
    });
    saveChanges();
  }


  render() {
    return(
      <div>
        <ul>
          <button onClick={this.addNote}>Add component</button>
        </ul>
        <ul>
          {
            this.state.notes.map((item) => (
              <Note id={item.id} title={item.title}/>
            ))
          }
          </ul>
      </div>
    );
  }
}

export default NoteBoard;
