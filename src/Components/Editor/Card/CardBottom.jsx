import React from 'react'
import Button from 'Components/Editor/Button/Button'
import { useNode } from '@craftjs/core'

const CardBottom = ({ children }) => {
	const {
		connectors: { connect },
	} = useNode()

	return <div ref={connect}>{children}</div>
}

CardBottom.craft = {
	rules: {
		// Only accept Buttons
		canMoveIn: incomingNodes =>
			incomingNodes.every(
				incomingNode => incomingNode.data.type === Button
			),
	},
}

export default CardBottom
