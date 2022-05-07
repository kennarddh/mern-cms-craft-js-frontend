import React from 'react'

import { useNode, Element } from '@craftjs/core'

import { Box } from '@mui/material'

import InnerContainer from './InnerContainer'

const Container = () => {
	const {
		connectors: { connect, drag },
		editable,
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<Box
			ref={ref => connect(drag(ref))}
			sx={{
				outline: editable ? '2px dashed red' : 'none',
			}}
		>
			<Element id='InnerContainer' is={InnerContainer} canvas />
		</Box>
	)
}

export default Container

export { InnerContainer }
