import React from 'react';
import PageLoading from 'react-page-loading';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';

export default class Dashboard extends React.Component {
	render(){
		return (
			<PageContainer>
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
			</PageContainer>
		);
	}
 }
