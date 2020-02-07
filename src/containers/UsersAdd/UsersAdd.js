import React, {useState} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {createControl, validate, validateForm} from '../../form/FormFramework';
import {addUser} from '../../store/actions/table';
import classes from './UsersAdd.module.scss';

function createFormControls() {
	return {
		name: createControl({
			label: 'Введите name',
			errorMessage: 'Вопрос не может быть пустым'
		}, {required: true}),
		age: createControl({
			label: 'Введите age',
			errorMessage: 'Вопрос не может быть пустым'
		}, {required: true}),
		city: createControl({
			label: 'Введите city',
			errorMessage: 'Вопрос не может быть пустым'
		}, {required: true}),
	};
}


const UsersAdd = (props) => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [formControls, setFormControls] = useState(createFormControls());

	const formHandler = (e) =>{
		e.preventDefault();
		addNewUser()
	};

	const changeHandler = (value, controlName) => {
		let formControlsList = {...formControls};
		let control = {...formControls[controlName]};

		control.touched = true;
		control.value = value;
		control.valid = validate(control.value, control.validation);

		formControlsList[controlName] = control;

		setFormControls(formControlsList);
		setIsFormValid(validateForm(formControlsList));
	};

	const addNewUser = () => {
		const {name, age, city} = formControls;

		const newPerson = {
			id: props.nextId,
			type: 'main',
			items: [
				name.value,
				age.value,
				city.value
			]
		};

		props.addUser(newPerson);

		let clearFormControls = {...formControls};

		for (let control in clearFormControls) {
			if (clearFormControls.hasOwnProperty(control)) {
				clearFormControls[control].value = '';
			}
		}

		setFormControls(clearFormControls);
		setIsFormValid(false);
	};

	const renderControls = () => {
		return Object.keys(formControls).map((controlName) => {
			const control = formControls[controlName];

			return (
				<Input
					key={controlName}
					label={control.label}
					value={control.value}
					valid={control.valid}
					shouldValidate={!!control.validation}
					touched={control.touched}
					errorMessage={control.errorMessage}
					onChange={event => changeHandler(event.target.value, controlName)}
				/>
			);
		});
	};

	return (
		<div className={classes.UsersAdd}>
			<h2>Добавление нового юзера</h2>
			<form onSubmit={formHandler}>
				{renderControls()}

				<Button
					btnType="primary"
					disabled={!isFormValid}
					type="submit"
				>
					Добавить нового юзера
				</Button>
			</form>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		nextId: state.table.nextId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addUser: newPerson => dispatch(addUser(newPerson)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAdd);
