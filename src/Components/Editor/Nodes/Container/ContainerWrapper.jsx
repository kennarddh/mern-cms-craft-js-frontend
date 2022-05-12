import React from 'react'

import { Element, useNode } from '@craftjs/core'

import { Box } from '@mui/material'

import Container from './Container'

const ContainerWrapper = () => {
	const {
		connectors: { connect, drag },
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<Box ref={ref => connect(drag(ref))}>
			<Element id='Container' is={Container} canvas />
		</Box>
	)
}

export default ContainerWrapper
