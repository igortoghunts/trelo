import { combineReducers } from 'redux';

import { lists, addList } from './list';
import { cards, addCard } from './card';
import { reducer as form } from 'redux-form';

export default combineReducers({ lists, addList, cards, addCard, form });
