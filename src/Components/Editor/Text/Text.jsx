import React from 'react'

import { Slider, FormControl, FormLabel, Typography } from '@mui/material'

import { useNode } from '@craftjs/core'

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

const TextSettings = () => {
	const {
		actions: { setProp },
		fontSize,
	} = useNode(node => ({
		fontSize: node.data.props.fontSize,
	}))

	return (
		<FormControl size='small' component='fieldset'>
			<FormLabel component='legend'>Font size</FormLabel>
			<Slider
				color='primary'
				value={fontSize || 7}
				step={1}
				min={7}
				max={50}
				onChange={(_, value) => {
					setProp(props => (props.fontSize = value))
				}}
				valueLabelDisplay='auto'
			/>
		</FormControl>
	)
}

Text.craft = {
	props: {
		text: 'Text',
		fontSize: 20,
	},
	related: {
		settings: TextSettings,
	},
}

export default Text
