import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageLoading from 'react-page-loading';
import Select from 'react-select';
import { useToasts } from 'react-toast-notifications';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';

function initialState() {
	return {
		username: '', 
		email: '', 
		password: '',
		permission: ''
	}
}
const Add = () => {
	const optionsPermissions = [
		{ value: 'admin', label: 'Admin' },
		{ value: 'programmer', label: 'Programador' },
	];
	const history = useHistory();
	const { addToast } = useToasts();
	const [values, setValues] = useState(initialState);

	function onSubmit(e) {
		e.preventDefault();

		const { username, email, password, permission } = values;
		if (!username || !email) {
			addToast('Username e e-mail não podem ser vazios', { appearance: 'warning', autoDismiss: true })
		} else {
			const resp = api.post(`users`, { username, email, password, permission });
			resp.then(user => {
				if (user) {
					addToast('Salvo com sucesso', { appearance: 'success', autoDismiss: true });
					history.push(`/user/${user.data.id}`);
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

	function onChangeSelect(e) {
		const { value } = e;
		setValues({
			...values,
			permission: value
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
									<input className="form-control" type="text" name="username" onChange={ onChange } value={ values.username } />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">E-mail</label>
									<input className="form-control" type="email" name="email" onChange={ onChange } value={ values.email } />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">Senha</label>
									<input className="form-control" type="password" name="password" onChange={ onChange } value={ values.newPassword } />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">Permissão</label>
  									<Select options={ optionsPermissions } onChange={ onChangeSelect } defaultValue={ values.permission } />
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