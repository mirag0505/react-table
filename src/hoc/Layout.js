import React, {Component} from 'react';
import Table from '../containers/Table/Table';
import classes from './Layout.module.scss';

class Layout extends Component {
	render() {
		return (
				<Table className={classes.Table}/>
		);
	}
}

export default Layout;
