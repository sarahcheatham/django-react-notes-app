import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Note = props => {
    return (
        <ListGroupItem>
            <span><strong>{props.title}</strong></span>
            <ListGroupItem>{props.content}</ListGroupItem>
        </ListGroupItem>
    )
}

export default Note;