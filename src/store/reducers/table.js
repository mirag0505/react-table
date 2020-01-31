import {USER_ADD} from '../actions/ActionType';

const initialState = {
	nextId: 3,
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
				'Vlad',
				6,
				'Voronezh'
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
		default:
			return state;
	}
}
