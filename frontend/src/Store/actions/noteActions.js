export const FETCH_NOTES_BEGIN = "FETCH_NOTES_BEGIN";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

export const handleErrors = response => {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const fetchNotesBegin = () => ({
    type: FETCH_NOTES_BEGIN
});

export const fetchNotesSuccess = notes => ({
    type: FETCH_NOTES_SUCCESS,
    payload: { notes }
});

export const fetchNotesFailure = error => ({
    type: FETCH_NOTES_FAILURE,
    payload: { error }
});

export const loadNotes = () => {
    return dispatch => {
        dispatch(fetchNotesBegin());
        return fetch('http://127.0.0.1:8000/api/v1/notes')
            .then(handleErrors)
            .then(res => res.json())
            .then(notes => {
                dispatch(fetchNotesSuccess(notes))
                return notes;
            })
            .catch(error => dispatch(fetchNotesFailure(error)))
    };
}


export const createNote = newNote => {
    console.log("ACTIONS:", newNote)
    return dispatch => {
        fetch('http://127.0.0.1:8000/api/v1/notes', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newNote)
        }).then(() => dispatch(loadNotes()));
    }
}

export const showNote = noteId => {
    return dispatch => {
        fetch(`http://127.0.0.1:8000/api/v1/notes/${noteId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(noteId)
        })
        .then(()=> dispatch(loadNotes()))
    }
}

export const updateNote = (noteId, updatedNote) => {
    return dispatch => {
        fetch(`http://127.0.0.1:8000/api/v1/notes/${noteId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedNote)
        })
        .then(()=> dispatch(loadNotes()))
    }
}

export const deleteNote = noteId => {
    return dispatch => {
        fetch(`http://127.0.0.1:8000/api/v1/notes/${noteId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(noteId)
        })
        .then(()=> dispatch(loadNotes()))
    }
}