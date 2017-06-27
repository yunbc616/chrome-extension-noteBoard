import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  render() {
    return(
        <li>
          <a href="#">
            <h2>{this.props.title}</h2>
            <p>Text Content #1</p>
          </a>
        </li>
    );
  }
}

export default Note;
