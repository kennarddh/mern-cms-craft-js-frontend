import React from 'react'

import { Slider, FormControl, FormLabel } from '@mui/material'

import { useNode } from '@craftjs/core'

const Settings = () => {
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

export default Settings
