import {USER_ADD} from './ActionType';

export function addUser(newPerson) {
	return {
		type: USER_ADD,
		newPerson
	};
}
