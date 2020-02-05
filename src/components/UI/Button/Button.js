import React from 'react';
import classes from './Button.module.scss';

const Button = ({onClick = ()=> {}, children, btnType, ...props}) => {
	const cls = [
		classes.Button,
		classes[btnType]
	];
	return (
		<button
			onClick={onClick}
			className={cls.join(' ')}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
