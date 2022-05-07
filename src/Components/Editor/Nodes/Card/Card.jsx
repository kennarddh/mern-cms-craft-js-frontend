import React from 'react'

import { Element } from '@craftjs/core'

import Text from 'Components/Editor/Nodes/Text/Text'
import Button from 'Components/Editor/Nodes/Button/Button'

import InnerContainer from 'Components/Editor/Nodes/Container/InnerContainer'

import CardTop from './CardTop'
import CardBottom from './CardBottom'

const Card = ({
	background,
	paddingTop = 20,
	paddingRight = 20,
	paddingBottom = 20,
	paddingLeft = 20,
}) => {
	return (
		<InnerContainer
			background={background}
			paddingTop={paddingTop}
			paddingRight={paddingRight}
			paddingBottom={paddingBottom}
			paddingLeft={paddingLeft}
		>
			<Element id='text' is={CardTop} canvas>
				<Text text='Title' fontSize={20} />
				<Text text='Subtitle' fontSize={15} />
			</Element>
			<Element id='buttons' is={CardBottom} canvas>
				<Button size='small' text='Learn more' variant='contained' />
			</Element>
		</InnerContainer>
	)
}

export default Card

export { CardTop, CardBottom }
