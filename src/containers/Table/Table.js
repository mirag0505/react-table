import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/UI/Button/Button';
import TableRow from '../../components/UI/Table-row/TableRow';
import {addUserAction, clearTableAction, userRandomDeletedAction} from '../../store/actions/table';
import classes from './Table.module.scss';

const Table = (props) => {
	const nextId = useSelector(state => state.table.nextId);
	const usersList = useSelector(state => state.table.usersList);

	const dispatch = useDispatch();

	const [prewUserDeleted, setPrewUserDeleted] = useState({});
	const [isPrewUserDeleted, setIsPrewUserDeleted] = useState(false);

	const clearTable = (e) => {
		e.preventDefault();
		dispatch(clearTableAction());
	};

	const deleteRandomPerson = (e) => {
		e.preventDefault();

		const userList = usersList
			.filter(user => user.type === 'main')
			.map(user => user.id);

		if (!userList.length) return;

		const idRandomUser = userList[Math.floor(Math.random() * userList.length)];

		const deletedUser = usersList
			.filter(user => user.id === idRandomUser)
			.reduce((acc, deletedUser) => acc = deletedUser);

		setPrewUserDeleted(deletedUser);
		setIsPrewUserDeleted(true);

		const newUsersList = usersList.filter(user => {
			return user.id !== idRandomUser;
		});

		dispatch(userRandomDeletedAction(newUsersList));
	};

	const backRemoteUser = (event) => {
		event.preventDefault();

		const {type, items} = prewUserDeleted;
		const newPerson = {
			id: nextId,
			type: type,
			items: items
		};

		if (isPrewUserDeleted) {
			addUserAction(newPerson);
		}

		setPrewUserDeleted({});
		setIsPrewUserDeleted(false);
	};

	return (
		<div className={classes.Table}>
			{
				usersList.map(rowInfo => {
					return (
						<TableRow
							id={rowInfo.id}
							rowInfo={rowInfo}
							key={rowInfo.id}
						/>
					);
				})
			}
			<form>
				<Button
					btnType="primary"
					onClick={clearTable}

				>
					Очистить таблицу
				</Button>
				<Button
					btnType="primary"
					onClick={deleteRandomPerson}
				>
					Удалить рандомного юзера
				</Button>
				<Button
					btnType="primary"
					onClick={backRemoteUser}
					disabled={!isPrewUserDeleted}
				>
					Восстановить
				</Button>
			</form>
		</div>
	);
};

export default Table;
