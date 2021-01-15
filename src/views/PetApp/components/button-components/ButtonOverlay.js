import React from 'react';

import { OverlayTrigger } from 'react-bootstrap';

export default function Overlay({ children, popOver}) {
	// debugger
	return (
		<OverlayTrigger trigger="click" placement={'top'} rootClose={true} overlay={popOver}>
			{children}
		</OverlayTrigger>
	);
}
