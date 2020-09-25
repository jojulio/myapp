import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';
import PageLoading from 'react-page-loading';

import api from '../../services/api';


async function getusers() {
	try {
		return await api.get('/users');
	} catch(err) {
		console.log(err)
	}
}

const User = () => {
	const history = useHistory();
	const [values, setValues] = useState({users: []});
	
	useEffect(() => {
		const users = getusers();
		users.then(users => {
			if (users) {
				setValues({
					users: users.data
				});
			}
		});
	}, []);

	function renderTableData() {
		return values.users.map(user => {
			const { id, username, email } = user;
			return (
				<tr key={id} onClick={() => show(id)}>
					<td>{id}</td>
					<td>{username}</td>
					<td>{email}</td>
				</tr>
			)
		});
	}

	function show(id) {
		history.push(`/user/${id}`);
	}

	function add() {
		history.push(`/user/add`);
	}

	return (
		<PageContainer>
			<PageLoading loader={"bar"} color={"#6a56a5"} size={10}>
				<Menu />
				<div className="main-content">
					<Header />
					<PageTitle pageTitle="Usuários" />
					<Container>
						<div className="row">
							<div className="col-sm-12 mb-4">
								<button onClick={ () => add() } type="submit" className="btn btn-primary btn-sm btn-xs"> Cadastrar</button>
							</div>
							<div className="col-sm-12">
								<table className="table table-striped table-bordered table-hover">
									<thead>
										<tr>
											<td>ID</td>
											<td>Username</td>
											<td>E-mail</td>
										</tr>
									</thead>
									<tbody>
										{ renderTableData() }
									</tbody>
								</table>
							</div>
						</div>
					</Container>
				</div>
			</PageLoading>
		</PageContainer>
	);
}

export default User;
