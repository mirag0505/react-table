import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRow from '../../components/UI/Table-row/TableRow';
import {addUser} from '../../store/actions/table';
import classes from './Table.module.scss';

class Table extends Component {
	render() {
		return (
			<div className={classes.Table}>
				{
					this.props.usersList.map(rowInfo => {
						return (
							<TableRow
								rowInfo={rowInfo}
								key={rowInfo.id}
							/>
						);
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		usersList: state.table.usersList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addUser: () => dispatch(addUser()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
