import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Alert from './components/layout/Alert';
import Payment from './components/layout/Payment';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Pricing from './components/layout/Pricing';
import FAQ from './components/layout/FAQ';
import Footer from './components/layout/Footer';
import { Element } from 'react-scroll';
import PrivateRoute from './components/routing/PrivateRoute';
import ThankYou from './components/layout/ThankYou';
import NotFound from './components/layout/NotFound';
import Contact from './components/layout/Contact';
import Calendly from './components/layout/Calendly';

const dotenv = require('dotenv');
dotenv.config();
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Alert />
					<Switch>
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/checkout" component={Payment} />
						<PrivateRoute exact path="/thank-you" component={ThankYou} />

						<Route exact path="/" component={Landing} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/appointment" component={Calendly} />
						<Route component={NotFound} />
					</Switch>
					<Element name="player">
						<Route exact path="/" component={Player} />
					</Element>
					<Element name="pricing">
						<Route exact path="/" component={Pricing} />
					</Element>
					<Element name="faq">
						<Route exact path="/" component={FAQ} />
					</Element>

					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
