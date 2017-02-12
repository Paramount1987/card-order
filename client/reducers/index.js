import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import shipping            from './shipping';
import billing             from './billing';
import payment             from './payment';

const rootReducer = combineReducers({ shipping, billing, payment, routing: routerReducer });

export default rootReducer;
