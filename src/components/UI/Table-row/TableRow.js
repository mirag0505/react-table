import React from 'react';
import Button from '../Button/Button';
import classes from './TableRow.module.scss';

export const TableRow = (props) => {
	const cls = [
		classes.TableRow,
		classes[props.rowInfo.type]
	];
	console.log(props);
	return (
		<div className="TableRow">
			<ul className={cls.join(' ')}>
				{
					props.type === 'head'
						? props.rowInfo.items.map((item, index) => {
							return (
								<Button
									key={index}
									btnType={'primary'}
									type={'button'}
									onClick={}
								>{item}</Button>);
						})
						: props.rowInfo.items.map((item, index) => {
							return (<li key={index}>{item}</li>);
						})
				}
			</ul>
		</div>
	);

};

export default TableRow;
