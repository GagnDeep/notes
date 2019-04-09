import React, { Component } from 'react';
import Notes from './containers/notes/notes-logic';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
	      <Notes />
	    </BrowserRouter>
    );
  }
}

export default App;
