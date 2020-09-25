import React, { useState } from 'react';
import PageLoading from 'react-page-loading';
import { useToasts } from 'react-toast-notifications';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';

const Add = () => {
	const { addToast } = useToasts();
	const [values, setValues] = useState([]);

	function onSubmit(e) {
		e.preventDefault();

		const { username, email, password } = values;

		if (!username || !email) {
			addToast('Username e e-mail não podem ser vazios', { appearance: 'warning', autoDismiss: true })
		} else {
			const resp = api.post(`users`, { username, email, password });
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
					<PageTitle pageTitle="Novo usuário" />
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
									<button type="submit" className="btn btn-primary btn-sm btn-xs"> Salvar</button>
								</div>
							</div>
						</form>
					</Container>
				</div>
			</PageLoading>
		</PageContainer>
	);
}

export default Add;