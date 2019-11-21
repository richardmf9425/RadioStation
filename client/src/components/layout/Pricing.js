import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Pricing({ auth: { isAuthenticated } }) {
	const handleClick = () => {
		if (!isAuthenticated)
			toast.error('Please Login First', {
				position: 'top-left',
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
	};
	return (
		<div className="pricing-section">
			<div className="pricing-header center text-center">
				<p className="x-large">Pricing:</p>
			</div>
			<div className="pricing-table">
				<Zoom>
					<div className="col">
						<div className="table">
							<h2>Regular</h2>
							<div className="price">
								$10
								<span>Per File</span>
							</div>
							<ul>
								<li>
									<strong>2</strong> Hours
								</li>
								<li>
									<strong>10</strong> Email
								</li>
								<li>
									<strong>100 GB</strong> Storage
								</li>
								<li>
									<strong>1</strong> Account
								</li>
							</ul>
							<Link onClick={() => handleClick()} to="/checkout">
								Buy Now
							</Link>
						</div>
					</div>
				</Zoom>
				<Zoom delay="500">
					<div className="col">
						<div className="table">
							<h2>Pro</h2>
							<div className="pop">Popular</div>
							<div className="price">
								$15
								<span>Per File</span>
							</div>
							<ul>
								<li>
									<strong>3</strong> Hours
								</li>
								<li>
									<strong>15</strong> Email
								</li>
								<li>
									<strong>200 GB</strong> Storage
								</li>
								<li>
									<strong>1</strong> Account
								</li>
							</ul>
							<Link to="/contact">Contact Us</Link>
						</div>
					</div>
				</Zoom>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Pricing);
