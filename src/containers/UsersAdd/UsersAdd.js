import React from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './UsersAdd.module.scss';

const UsersAdd = (props) => {
	return (
		<div className={classes.UsersAdd}>
			<Button onClick={props.onRetry} type="primary">Добавировлповдалоыдть нового юзера</Button>
		</div>
	);
};

export default UsersAdd;
