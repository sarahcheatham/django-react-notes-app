import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadNotes } from './Store/actions/noteActions';
import NoteList from './components/NotesList';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    this.props.loadNotes()
  }
  render() {
    return (
      <Container className="App">
        <Row>
          <Col xs={12}>
            <h1>Notes App!!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <NoteList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadNotes: () => dispatch(loadNotes())
  }
}

export default connect(null, mapDispatchToProps)(App)
