import {USER_ADD} from '../actions/ActionType';

const initialState = {
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
				...state
			};
		// case TABLE_CLEAR:
		// 	return {
		// 		...state
		// 	};
		// case USER_RANDOM_DELETE:
		// 	return {
		// 		...state
		// 	};
		// case USER_PREVIOUS_RESTORE:
		// 	return {
		// 		...state
		// 	};
		default:
			return state;
	}
}
