import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<Navigation/>
				</header>
				<main>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
}

export default Layout;
