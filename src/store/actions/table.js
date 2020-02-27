import {TABLE_CLEAR, USER_ADD, USER_LIST_SORTED, USER_RANDOM_DELETE} from './ActionType';

export function addUserAction(newPerson) {
	return {
		type: USER_ADD,
		newPerson
	};
}

export function clearTableAction() {
	return {
		type: TABLE_CLEAR
	}
}

export function userRandomDeletedAction(newUsersList) {
	return {
		type: USER_RANDOM_DELETE,
		newUsersList
	}
}

export function sortUsersListAction(newUsersList) {
	return {
		type: USER_LIST_SORTED,
		newUsersList
	}
}
