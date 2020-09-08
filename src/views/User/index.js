import React from 'react';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';

function User() {
	return (
		<div className="page-container">
			<Menu />
			<div className="main-content">
				<Header />
				<PageTitle pageTitle="Usuários" />
				
				<Container>
					<div>
						<h6>Teste usuários</h6>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default User;
