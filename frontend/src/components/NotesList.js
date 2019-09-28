import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import Note from './Note';

const isEmpty = obj => {
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            return false
        }
    }
    return true
}

class NoteList extends Component {
    constructor(props){
        super(props);
    }

    renderNoteList = notes => {
       const list = notes.map((note)=> {
           return <Note key={note.id} title={note.title} content={note.content} />
       })
       return list;
    }

    render(){
        if(!isEmpty(this.props.notes)){
            const notes = this.renderNoteList(this.props.notes)
            return(
                <ListGroup>
                    {notes}
                </ListGroup>
            )
        } 
        return <Spinner/>
        
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(NoteList);