import React, { useEffect } from 'react';

function Calendly() {
	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
		head.appendChild(script);
	});
	return (
		<div
			className="calendly-inline-widget"
			data-url="https://calendly.com/richardmf9425"
			style={{ minWidth: '320px', height: '630px' }}
		/>
	);
}

export default Calendly;
