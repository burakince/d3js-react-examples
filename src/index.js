import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from './modules/dashboard/DashboardLayout';
import Header from './modules/shared/components/Header';
import Footer from './modules/shared/components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Header />
		<DashboardLayout />
		<Footer />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();
