import storeState from '../state';
import { combineReducers } from 'redux';
import {
    FETCH_NOTES_BEGIN,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
} from '../actions/noteActions';

const notes = (state = storeState.notes, action) => {
    switch(action.type){
        case FETCH_NOTES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_NOTES_SUCCESS:
            return {
                ...state, 
                loading: false,
                notes: action.payload.notes
            }
        case FETCH_NOTES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                notes: []
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    notes
});

export default rootReducer;