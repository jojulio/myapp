import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { menu } from '../../config/Routes/Views/private';
import { getUser } from '../../services/auth';

function Menu() {
	const [routesState, setRoutes] = useState(null);
	useEffect(() => {
		const routes = [];
		const currentUser = JSON.parse(getUser());
		const routesOrdered = menu.sort((a, b) => {
			return (a.order > b.order) ? 1 : ((a.order < b.order) ? -1 : 0);
		});

		for (let i = 0; i < routesOrdered.length; i++) {
			const route = routesOrdered[i];
			if (route.roles.indexOf(currentUser.permission) !== -1) {
				routes.push(route);
			}
		}
		setRoutes(routes)
	}, []);
	
	return (
		<div className="sidebar-menu">
			<div className="sidebar-header">
				<div className="logo">
					<h5 className="logo">Sistema Admin</h5>
				</div>
			</div>
			<div className="main-menu">
				<div className="slimScrollDiv">
					<div className="menu-inner">
						<nav>
							<ul className="metismenu" id="menu">
								{
									routesState && routesState.map(route => {
										const { path, name, id, icon } = route;
										return (
											<li key={`menu-${id}`}>
												<NavLink exact to={path}>
													{icon}<span>{name}</span>
												</NavLink>
											</li>
										)
									})
								}
							</ul>
						</nav>
					</div>
					<div className="slimScrollBar"></div>
					<div className="slimScrollRail"></div>
				</div>
			</div>
		</div>
	);
  }

export default Menu;