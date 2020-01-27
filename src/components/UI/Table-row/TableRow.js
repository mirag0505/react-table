import React from 'react';
import classes from './TableRow.module.scss';

export const TableRow = (props) => {
	const cls = [
		classes.TableRow,
		classes[props.rowInfo.type]
	];

	return (
		<div className="TableRow">
			<ul className={cls.join(' ')}>
				{
					props.rowInfo.items.map((item, index) => {
						return (<li key={index}>{item}</li>);
					})
				}
			</ul>
		</div>
	);

};

export default TableRow;
