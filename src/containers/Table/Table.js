import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/UI/Button/Button';
import TableRow from '../../components/UI/Table-row/TableRow';
import {addUser, clearTable, userRandomDeleted} from '../../store/actions/table';
import classes from './Table.module.scss';

class Table extends Component {
	state = {
		prewUserDeleted: {},
		isPrewUserDeleted: false
	};

	render() {
		const clearTable = (event) => {
			event.preventDefault();
			this.props.clearTable();
		};

		const deleteRandomPerson = (event) => {
			event.preventDefault();

			const userList = this.props.usersList
				.filter(user => user.type === 'main')
				.map(user => user.id);

			if (!userList.length) return;

			const idRandomUser = userList[Math.floor(Math.random() * userList.length)];

			const deletedUser = this.props.usersList
				.filter(user => user.id === idRandomUser)
				.reduce((acc, deletedUser) => acc = deletedUser);

			this.setState({
				prewUserDeleted: deletedUser,
				isPrewUserDeleted: true
			});

			const newUsersList = this.props.usersList.filter(user => {
				return user.id !== idRandomUser;
			});

			this.props.userRandomDeleted(newUsersList);
		};

		const backRemoteUser = (event) => {
			event.preventDefault();

			const {type, items} = this.state.prewUserDeleted;
			const newPerson = {
				id: this.props.nextId,
				type: type,
				items: items
			};

			if (this.state.isPrewUserDeleted) {
				this.props.addUser(newPerson);
			}

			this.setState({
				prewUserDeleted: {},
				isPrewUserDeleted: false
			});
		};

		return (
			<div className={classes.Table}>
				{
					this.props.usersList.map(rowInfo => {
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
						disabled={!this.state.isPrewUserDeleted}
					>
						Восстановить
					</Button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		nextId: state.table.nextId,
		usersList: state.table.usersList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		clearTable: () => dispatch(clearTable()),
		userRandomDeleted: newListUsers => dispatch(userRandomDeleted(newListUsers)),
		addUser: newPerson => dispatch(addUser(newPerson)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
