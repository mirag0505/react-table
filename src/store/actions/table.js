import {USER_ADD} from './ActionType';


export function addUser() {
	// localStorage.removeItem('token');
	// localStorage.removeItem('userId');
	// localStorage.removeItem('expiration');

	return {
		type: USER_ADD
	};
}
