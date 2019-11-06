import React from 'react';
import Zoom from 'react-reveal/Zoom';

function Pricing() {
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
							<a href="/">Buy Now</a>
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
							<a href="/">Buy Now</a>
						</div>
					</div>
				</Zoom>
			</div>
		</div>
	);
}

export default Pricing;
