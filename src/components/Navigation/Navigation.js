import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = (props) => {
	const renderLinks = (links) => {
		return (links.map((link) => {
				return (
					<li key={link.to}>
						<NavLink
							to={link.to}
							exact={link.exact}
							activeClassName={classes.active}
						>
							{link.label}</NavLink>
					</li>
				);
			})
		);
	};

	const links = props.links.links;
	return (
		<ul className={classes.Navigation}>
			{renderLinks(links)}
		</ul>
	);

};

function mapStateToProps(state) {
	return {
		links: state.links
	};
}

export default connect(mapStateToProps)(Navigation);
