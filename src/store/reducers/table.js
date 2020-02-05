import {TABLE_CLEAR, USER_ADD, USER_RANDOM_DELETE} from '../actions/ActionType';

const initialState = {
	nextId: 5,
	usersList: [
		{
			id: 0,
			type: 'header',
			items: [
				'name',
				'age',
				'city'
			]
		}, {
			id: 1,
			type: 'main',
			items: [
				'Olga',
				21,
				'Belgorod'
			]
		}, {
			id: 2,
			type: 'main',
			items: [
				'Alex',
				10,
				'Novgorod'
			]
		}, {
			id: 3,
			type: 'main',
			items: [
				'Ira',
				6,
				'Kiev'
			]
		}, {
			id: 4,
			type: 'main',
			items: [
				'Vlad',
				13,
				'Tomsk'
			]
		}
	]
};

export default function table(state = initialState, action) {
	switch (action.type) {
		case USER_ADD:
			return {
				...state,
				nextId: state.nextId + 1,
				usersList: [...state.usersList, action.newPerson]
			};
		case TABLE_CLEAR:
			return {
				...state,
				nextId: 0,
				usersList: []
			};
		case USER_RANDOM_DELETE:
			return {
				...state,
				usersList: action.newUsersList
			};
		default:
			return state;
	}
}
