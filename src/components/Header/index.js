import React from 'react';
import { FaSearch, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

function Dashboard() {
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
				<div className="col-md-6 col-sm-4 clearfix">
					<ul className="notification-area float-right">
						<li className="dropdown">
							<FaBell/>
						</li>
						<li className="dropdown">
							<FaEnvelope />
						</li>
						<li className="settings-btn">
							<FaCog />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
  }

export default Dashboard;
