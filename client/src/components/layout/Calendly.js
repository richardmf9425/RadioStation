import React, { useEffect } from 'react';

function Calendly() {
	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
		head.appendChild(script);
	});
	return (
		<section className="payment-section">
			{/* <div className="calendly-inline-widget calendly-style" data-url="https://calendly.com/richardmf9425"  /> */}
			<div className="calendar">
				<iframe
					src="https://calendly.com/richardmf9425?embed_domain=localhost%3A3000&embed_type=Inline"
					frameborder="0"
					className="calendly-style"
				/>
			</div>
		</section>
	);
}

export default Calendly;
