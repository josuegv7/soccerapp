import Axios from 'axios';
import { FETCH_USER } from './types'

export const getUser = () =>  async dispatch => {
    const res = await Axios.get('/soccerapp/current_user')
    dispatch ({ type: FETCH_USER, payload: res.data});
};
