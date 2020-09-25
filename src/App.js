import React from "react";
import Routes from "./config/Routes";
import { ToastProvider } from 'react-toast-notifications';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/theme.css';
import './assets/css/typography.css';
import './assets/css/default-css.css';

const App = () => (
	<ToastProvider>
		<Routes />
	</ToastProvider>
);

export default App;