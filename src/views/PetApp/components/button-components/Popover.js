import React from 'react';

import { Popover } from 'react-bootstrap';

export default function Popover({children}) {
	return (
		<Popover id={`popover-positioned-top`} className="custom-popover">
			<Popover.Content>
				{children}
			</Popover.Content>
		</Popover>
	);
}
