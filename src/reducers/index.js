import counterReducer from './counter';
import { combineReducers } from 'redux';

const allRedeucers = combineReducers({
    counter : counterReducer
});

export default allRedeucers;
