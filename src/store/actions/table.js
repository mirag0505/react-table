import {TABLE_CLEAR, USER_ADD, USER_LIST_SORTED, USER_PREVIOUS_RESTORE, USER_RANDOM_DELETE} from './ActionType';

export function addUser(newPerson) {
	return {
		type: USER_ADD,
		newPerson
	};
}

export function clearTable() {
	return {
		type: TABLE_CLEAR
	}
}

export function userRandomDeleted(newUsersList) {
	return {
		type: USER_RANDOM_DELETE,
		newUsersList
	}
}

export function sortUsersList(newUsersList) {
	return {
		type: USER_LIST_SORTED,
		newUsersList
	}
}
