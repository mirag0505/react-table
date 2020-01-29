import {combineReducers} from 'redux';
import links from './links';
import table from './table';

export default combineReducers({
	table,
	links
});
