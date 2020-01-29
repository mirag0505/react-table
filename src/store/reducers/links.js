const initialState = {
	links: [
		{to: '/users', label: 'Список', exact: true},
		{to: '/users/add', label: 'Добавить пользователя', exact: true},
	]
};

export default function links(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
