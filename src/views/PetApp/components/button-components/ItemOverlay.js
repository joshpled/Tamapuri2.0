import React from 'react'

import {OverlayTrigger, Tooltip} from 'react-bootstrap'

export default function ItemOverlay({children}) {
    return (
        <OverlayTrigger placement={'top'} overlay={<Tooltip id={`tooltip-top`}>+30% to Hunger</Tooltip>}>
					{children}
				</OverlayTrigger>
    )
}