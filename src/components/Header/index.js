import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { getUser, logout } from '../../services/auth';

function Dashboard() {
	const history = useHistory();
	const user = JSON.parse(getUser());
	const username = user.username;

	function signOut() {
		logout();
		history.push(`/login`);
	}

	return (
		<div className="header-area">
			<div className="row align-items-center">
				<div className="col-md-6 col-sm-8 clearfix">
					<div className="nav-btn float-left">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="search-box float-left">
						<form action="#">
							<input type="text" name="search" placeholder="Search..." required="" />
							<FaSearch/>
						</form>
					</div>
				</div>
				<div className="col-md-4 col-sm-4 clearfix">
					<ul className="notification-area float-right">
						<li className="dropdown">
							<FaBell/>
						</li>
						<li className="dropdown">
							<FaEnvelope />
						</li>
					</ul>
				</div>
				<div className="col-md-2 col-sm-2 clearfix">
					<div className="user-profile pull-right">
						<img className="avatar user-thumb" src="https://www.pinclipart.com/picdir/middle/221-2217551_user-icon-png-clipart-computer-icons-user-green.png" alt="avatar" />
						<h4 className="user-name">{ username }</h4>
						<span className="sign-out" onClick={ () => signOut() } >
							<FaSignOutAlt />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
  }

export default Dashboard;
