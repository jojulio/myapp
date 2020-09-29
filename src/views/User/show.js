import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageLoading from 'react-page-loading';
import { useToasts } from 'react-toast-notifications';
import SweetAlert from 'sweetalert2-react';
import Select from 'react-select';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';

function initialUser() {
	return {
		username: '', 
		email: '', 
		password: '',
		permission: ''
	}
}

function initialPermission() {
	return { value: '', label: '' };
}

function getPermissions() {
	return [
		{ value: 'admin', label: 'admin' },
		{ value: 'programmer', label: 'programmer' },
	];
}

const Show = () => {
	const optionsPermissions = getPermissions();
	const history = useHistory();
	const { addToast } = useToasts();
	const [values, setValues] = useState(initialUser());
	const [permission, setPermission] = useState(initialPermission());
	const [alert, setAlert] = useState({ show: false });
	const { id } = useParams();

	useEffect(() => {
		const resp = api.get(`/users/${id}`);
		resp.then(user => {
			if (user) {
				setValues(user.data);
				setPermission({ value: user.data.permission, label: user.data.permission });
			}
		});
	}, [id]);

	function onSubmit(e) {
		e.preventDefault();

		const { id, username, email, password, permission} = values;

		if (!username || !email) {
			console.error('username e e-mail não podem ser vazios')
		} else {
			const resp = api.put(`users/${id}`, { username, email, password, permission });
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

	function remove() {
		const id = values.id;
		const resp = api.delete(`users/${id}`,);
		resp.then(() => {
			addToast('Removido com sucesso', { appearance: 'success', autoDismiss: true });
			history.push('/user');
		})
		.catch(error => {
			console.log(error)
			addToast('Não foi possível remover', { appearance: 'error', autoDismiss: true });
		});

		setAlert({ show: false });
	}

	function onChangeSelect(e) {
		const { value, label } = e;
		setValues({
			...values,
			permission: value
		});

		setPermission({ value, label });
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
									<input className="form-control" type="text" name="username" onChange={onChange} value={values.username} />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">E-mail</label>
									<input className="form-control" type="email" name="email" onChange={onChange} value={values.email} />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">Senha</label>
									<input className="form-control" type="password" name="password" onChange={onChange} value={values.newPassword} />
								</div>

								<div className="col-sm-3 my-1">
									<label className="col-form-label">Permissão</label>
  									<Select options={ optionsPermissions } onChange={ onChangeSelect } value={ permission } />
								</div>
								
								<div className="col-sm-12 my-3">
									<button type="submit" className="btn btn-primary btn-sm btn-xs"> Salvar</button>
									<button onClick={ () => setAlert({ show: true }) } type="button" className="btn btn-danger btn-sm btn-xs ml-3"> Remover</button>
								</div>
							</div>
						</form>
					</Container>
				</div>
			</PageLoading>
			<SweetAlert
				show={ alert.show }
				title="Remover"
				text={`Tem certeza que deseja remover o usuário ${values.username}?`}
				onConfirm={ () => remove() }
			/>
		</PageContainer>
	);
}

export default Show;