import React from 'react';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageLoading from 'react-page-loading';

export default class Dashboard extends React.Component {
	render(){
		return (
			<div className="page-container">
				<PageLoading loader={"bar"} color={"#6a56a5"} size={10}>
					<Menu />
					<div className="main-content">
						<Header />
						<PageTitle pageTitle="Dashboard"/>
		
						<Container>
							<div>
								<h6>Teste dashboard</h6>
							</div>
						</Container>
					</div>
				</PageLoading>
			</div>
		);
	}
 }
