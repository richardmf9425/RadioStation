import React, { useState } from 'react';

function FAQ() {
	const [active, toggleActive] = useState(false);
	const [active1, toggleActive1] = useState(false);
	const [active2, toggleActive2] = useState(false);
	const [active3, toggleActive3] = useState(false);
	const [active4, toggleActive4] = useState(false);

	return (
		<div className="FAQ-section ">
			<div class="container-faq">
				<h2 className="faq-header">Frequently Asked Questions</h2>

				<div className="accordion">
					<div className="accordion-item">
						<a onClick={() => toggleActive(!active)} className={active ? 'active' : ''}>
							What is At the Wellness Network?
						</a>
						<div className={active ? ' content active' : 'content'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut
								tortor pretium viverra suspendisse potenti.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive1(!active1)} className={active1 ? 'active' : ''}>
							How do I schedule an appointment?
						</a>
						<div className={active1 ? ' content active' : 'content'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut
								tortor pretium viverra suspendisse potenti.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive2(!active2)} className={active2 ? 'active' : ''}>
							Do I need to create an account before I can upload files?
						</a>
						<div className={active2 ? ' content active' : 'content'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut
								tortor pretium viverra suspendisse potenti.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive3(!active3)} className={active3 ? 'active' : ''}>
							What events are there for kids?
						</a>
						<div className={active3 ? ' content active' : 'content'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut
								tortor pretium viverra suspendisse potenti.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive4(!active4)} className={active4 ? 'active' : ''}>
							Where is At the Wellness Network located?
						</a>
						<div className={active4 ? ' content active' : 'content'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut
								tortor pretium viverra suspendisse potenti.
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className="youtube-header">
				Follow us on YouTube <i className="fab fa-youtube" />
			</p>
			<iframe
				style={{
					position: 'absolute',
					bottom: '5%',

					left: 'auto',
					width: '20vw',
					minWidth: '20vw',
					height: '20%'
				}}
				allowfullscreen="allowfullscreen"
				src={`https://www.youtube.com/embed/YcAaJ8vC_54`}
				frameBorder="0"
			/>
		</div>
	);
}

export default FAQ;
