import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import { reducer as reduxForm } from   'redux-form';


export default combineReducers({
  auth: authReducer,
  form: reduxForm, 
  games: gamesReducer
});
