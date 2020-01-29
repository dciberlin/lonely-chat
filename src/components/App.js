import React from 'react';
import '../scss/App.scss';
import MessagesContainer from './MessagesContainer';
import FormContainer from './FormContainer.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MessagesContainer></MessagesContainer>
        <FormContainer></FormContainer>
      </div>
    );
  }
}

export default App;
