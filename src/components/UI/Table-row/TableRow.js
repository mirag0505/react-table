import React from 'react';
import {connect} from 'react-redux';
import {addUser, sortUsersList} from '../../../store/actions/table';
import Button from '../Button/Button';
import classes from './TableRow.module.scss';

export const TableRow = ({rowInfo, ...props}) => {

	const cls = [
		classes.TableRow,
		classes[rowInfo.type]
	];

	const sortUsersList = (e, row, typeRow) => {
		const usersList = [...props.usersList];

		const sortType = ['name', 'age', 'city'];
		let indexSortType = 0;

		if (sortType.indexOf(row) > -1) {
			indexSortType = sortType.indexOf(row);
		}

		let results = usersList.sort(function (a, b) {
			if (a.items[indexSortType] > b.items[indexSortType]) {
				return 1;
			}
			if (a.items[indexSortType] < b.items[indexSortType]) {
				return -1;
			}
			return 0;
		});

		props.sortUsersList(results)
	};

	return (
		<div className="TableRow">
			<ul className={cls.join(' ')}>
				{
					rowInfo.type === 'header'
						? Object.keys(rowInfo.items).map((item, index) => {
							return (
								<li key={index}>
									<Button
										key={index}
										btnType={'success'}
										type={'button'}
										onClick={(e) => sortUsersList(e, item, rowInfo.items[item])}
									>{item}</Button>
								</li>);
						})
						: rowInfo.items.map((item) => {
							return (<li key={item}>{item}</li>);
						})
				}
			</ul>
		</div>
	);

};

function mapStateToProps(state) {
	return {
		usersList: state.table.usersList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sortUsersList: newUsersList => dispatch(sortUsersList(newUsersList)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
