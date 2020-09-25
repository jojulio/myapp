import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Menu() {
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
								<li id="menu-dashboard">
									<NavLink exact to="/">
										<FaHome /><span>Dashboard</span>
									</NavLink>
								</li>
								<li id="menu-users">
									<NavLink to="/user">
										<FaUsers /><span>Usuários</span>
									</NavLink>
								</li>
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