import { combineReducers } from 'redux';

import orders from './orders';
import restaurants from './restaurants';
import user from './user';

export default combineReducers({ orders, restaurants, user });