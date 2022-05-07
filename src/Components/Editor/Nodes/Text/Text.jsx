import React from 'react'

import { Typography } from '@mui/material'

import { useNode } from '@craftjs/core'

import Settings from './Settings'

const Text = ({ text, fontSize, textAlign }) => {
	const {
		connectors: { connect, drag },
		editable,
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<div>
			<Typography
				variant='p'
				align={textAlign}
				ref={ref => connect(drag(ref))}
				sx={{
					fontSize: fontSize,
					outline: editable ? '2px dashed red' : 'none',
				}}
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
