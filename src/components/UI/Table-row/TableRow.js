import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../../store/actions/table';
import Button from '../Button/Button';
import classes from './TableRow.module.scss';

export const TableRow = ({rowInfo, ...props}) => {

	const cls = [
		classes.TableRow,
		classes[rowInfo.type]
	];

	const sortUsersList = (e, row, typeRow) => {
		const orderBy = (arr, props, orders) =>
			[...arr].sort((a, b) =>
				props.reduce((acc, prop, i) => {
					if (acc === 0) {
						const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
						acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
					}
					return acc;
				}, 0)
			);

		if (typeRow === 'number') {
			console.log(lol);
		}
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
		sortUsersList: newUsersList => dispatch(addUser(newUsersList)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
