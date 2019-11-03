import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	// if (isAuthenticated) {
	// 	return <Redirect to="/dashboard" />;
	// }
	return (
		<Fragment>
			<section className="landing">
				<div className="dark-overlay">
					<div className="landing-inner">
						<h1 className="x-large">
							{' '}
							<span className="landing-blue">At The Wellness</span>{' '}
							<span className="landing-green">Network</span>{' '}
						</h1>
						<p className="lead"> There's healing at the Well</p>
						<figure>
							<figcaption>Live Right Now:</figcaption>
							<audio className="audio" controls src="http://s3.voscast.com:9158/;stream1572801364375/1">
								Your browser does not support the
								<code>audio</code> element.
							</audio>
						</figure>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Landing);
