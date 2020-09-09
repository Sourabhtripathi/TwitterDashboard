import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tweets from './tweets';

export default combineReducers({
	auth: authReducer,
	tweets: tweets
});
