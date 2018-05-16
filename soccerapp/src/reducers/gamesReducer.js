import {
    EXPORT_GAMES
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case EXPORT_GAMES:
            return action.payload;
        default: 
            return state;
    }
}
