import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            const { [action.payload]: omit, ...newState } = state;
            return newState;
        case FETCH_STREAMS:
            const newObject = {};
            action.payload.forEach((item) => (newObject[item.id] = item));
            return { ...state, ...newObject };
        default:
            return state;
    }
};
