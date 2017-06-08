import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/dashboard/components/App';
import Header from './modules/shared/components/Header';
import Footer from './modules/shared/components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Header />
		<App />
		<Footer />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();
