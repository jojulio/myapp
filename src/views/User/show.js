import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLoading from 'react-page-loading';
import { useToasts } from 'react-toast-notifications';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';

const Show = ({ content }) => {
	const { addToast } = useToasts();
	const [values, setValues] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const resp = api.get(`/users/${id}`);
		resp.then(user => {
			if (user) {
				setValues(user.data);
			}
		});
	}, [id]);

	function onSubmit(e) {
		e.preventDefault();

		const { id, username, email, password } = values;

		if (!username || !email) {
			console.error('username e email não podem ser vazios')
		} else {
			const resp = api.put(`users/${id}`, { username, email, password });
			resp.then(user => {
				if (user) {
					addToast('Salvo com sucesso', { appearance: 'success', autoDismiss: true })
				}
			})
			.catch(error => {
				console.log(error.response)
				addToast('Não foi possível salvar', { appearance: 'error', autoDismiss: true });
			});
		}

	}

	function onChange(e) {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	return (
		<PageContainer>
			<PageLoading loader={"bar"} color={"#6a56a5"} size={10}>
				<Menu />
				<div className="main-content">
					<Header />
					<PageTitle pageTitle="Usuários" />
					<Container>
						<form onSubmit={onSubmit}>
							<div className="form-row align-items-center">
								<input hidden readOnly type="text" name="id" value={values.id} />
	
								<div className="col-sm-3 my-1">
									<label className="col-form-label">Username</label>
									<input className="form-control form-control-sm" type="text" name="username" onChange={onChange} value={values.username} />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">E-mail</label>
									<input className="form-control form-control-sm" type="email" name="email" onChange={onChange} value={values.email} />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">Senha</label>
									<input className="form-control form-control-sm" type="password" name="password" onChange={onChange} value={values.newPassword} />
								</div>

								<div className="col-sm-12 my-3">
									<button type="submit" className="btn btn-primary btn-sm btn-xs" id="save"> Salvar</button>
								</div>
							</div>
						</form>
					</Container>
				</div>
			</PageLoading>
		</PageContainer>
	);
}

export default Show;