import React from 'react'
import Text from 'Components/Editor/Text/Text'
import Button from 'Components/Editor/Button/Button'
import { Element, useNode } from '@craftjs/core'

import Container from 'Components/Editor/Container/Container'

export const CardTop = ({ children }) => {
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

export const CardBottom = ({ children }) => {
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

const Card = ({ background, padding = 20 }) => {
	return (
		<Container background={background} padding={padding}>
			<Element id='text' is={CardTop} canvas>
				<Text text='Title' fontSize={20} />
				<Text text='Subtitle' fontSize={15} />
			</Element>
			<Element id='buttons' is={CardBottom} canvas>
				<Button size='small' text='Learn more' />
			</Element>
		</Container>
	)
}

export default Card
