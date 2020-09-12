import React from 'react';
import { FaEnvelope, FaArrowRight, FaLock } from 'react-icons/fa';

export default class Login extends React.Component {
	render(){
		return (
			<div className="login-area">
				<div className="container">
					<div className="login-box ptb--100">
						<form>
							<div className="login-form-head">
								<h4>Login</h4>
							</div>
							<div className="login-form-body">
								<div className="form-gp">
									<label htmlFor="email">E-mail</label>
									<input type="email" id="email" />
									<FaEnvelope />
								</div>
								<div className="form-gp">
									<label htmlFor="password">Senha</label>
									<input type="password" id="password" />
									<FaLock />
								</div>
								<div className="submit-btn-area">
									<button id="form_submit" type="submit">Entrar <FaArrowRight /> </button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
 }
