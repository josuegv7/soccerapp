import Axios from 'axios';
import { FETCH_USER, POST_EVENT } from './types'

export const getUser = () =>  async dispatch => {
    const res = await Axios.get('/soccerapp/current_user')
    dispatch ({ type: FETCH_USER, payload: res.data});
};


export const submitEvent = (eventFormValues, history) => async dispatch => {
    const res = await Axios.post('/soccerapp/game', eventFormValues);
    history.push('/profile')
    // dispatch ({type: POST_EVENT, payload:res.data})
};