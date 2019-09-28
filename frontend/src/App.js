import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/v1/notes')
    .then(res => res.json())
    .then(data => {
      this.setState({ notes: data })
    })
  }
  render() {
    return (
      <div className="App">
       Notes App!!
      </div>
    );
  }
}

export default App;
