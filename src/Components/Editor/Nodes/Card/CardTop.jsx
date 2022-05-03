import React from 'react'
import Text from 'Components/Editor/Nodes/Text/Text'
import { useNode } from '@craftjs/core'

const CardTop = ({ children }) => {
	const {
		connectors: { connect },
	} = useNode()

	return (
		<div ref={connect} className='text-only'>
			{children}
		</div>
	)
}

CardTop.craft = {
	rules: {
		// Only accept Text
		canMoveIn: incomingNodes =>
			incomingNodes.every(
				incomingNode => incomingNode.data.type === Text
			),
	},
}

export default CardTop
