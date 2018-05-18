import Axios from 'axios';
import { EXPORT_GAMES, FETCH_USER, POST_EVENT, SEND_TEXT } from './types';

export const getUser = () =>  async dispatch => {
    const res = await Axios.get('/soccerapp/current_user');
    dispatch ({ type: FETCH_USER, payload: res.data});
};

export const submitEvent = (eventFormValues, history) => async dispatch => {
    const res = await Axios.post('/soccerapp/game', eventFormValues);
    dispatch ({type: POST_EVENT, payload:res.data});
     history.push('/profile')
};

export const exportGames = () => async dispatch => {
    const res = await Axios.get('/soccerapp/games');
    dispatch({ type: EXPORT_GAMES, payload: res.data })
};

export const sendText = (eventFormValues, history) => async dispatch => {
    const res = await Axios.post('/soocerapp/textsend', eventFormValues);
    dispatch({type: SEND_TEXT, payload:res.data});
     history.push('/profile')
};