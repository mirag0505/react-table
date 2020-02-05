import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Table from './containers/Table/Table';
import UsersAdd from './containers/UsersAdd/UsersAdd';
import Layout from './hoc/Layout';

class App extends Component {
	routs = (
		<Switch>
			<Route path="/users" exact component={Table}/>
			<Route path="/users/add" exact component={UsersAdd}/>
			{/*<Route path="/quiz/:id" component={TableId}/>*/}
			<Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}>Тестовое приложение</h1>}/>
			<Redirect to=""/>
		</Switch>
	);

	render() {
		return (
			<Layout>
				{this.routs}
			</Layout>
		);
	}
}

export default withRouter(App);
