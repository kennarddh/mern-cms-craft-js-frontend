import React from 'react'
import Text from 'Components/Editor/Components/Text/Text'
import Button from 'Components/Editor/Components/Button/Button'
import { Element } from '@craftjs/core'

import Container from 'Components/Editor/Components/Container/Container'

import CardTop from './CardTop'
import CardBottom from './CardBottom'

const Card = ({ background, padding = 20 }) => {
	return (
		<Container background={background} padding={padding}>
			<Element id='text' is={CardTop} canvas>
				<Text text='Title' fontSize={20} />
				<Text text='Subtitle' fontSize={15} />
			</Element>
			<Element id='buttons' is={CardBottom} canvas>
				<Button size='small' text='Learn more' variant='contained' />
			</Element>
		</Container>
	)
}

export default Card

export { CardTop, CardBottom }
