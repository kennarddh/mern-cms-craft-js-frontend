import React from 'react'

import { Typography } from '@mui/material'

import { useNode } from '@craftjs/core'

import Settings from './Settings'

const Text = ({ text, fontSize, textAlign }) => {
	const {
		connectors: { connect, drag },
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<div ref={ref => connect(drag(ref))}>
			<Typography
				variant='p'
				align={textAlign}
				style={{ fontSize: fontSize }}
			>
				{text}
			</Typography>
		</div>
	)
}

Text.craft = {
	props: {
		text: 'Text',
		fontSize: 20,
	},
	related: {
		settings: Settings,
	},
}

export default Text
