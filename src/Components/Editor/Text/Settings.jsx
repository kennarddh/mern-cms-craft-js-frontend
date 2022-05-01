import React from 'react'

import { Slider, FormControl, FormLabel, TextField } from '@mui/material'

import { useNode } from '@craftjs/core'

const Settings = () => {
	const {
		actions: { setProp },
		fontSize,
		text,
	} = useNode(node => ({
		fontSize: node.data.props.fontSize,
		text: node.data.props.text,
	}))

	return (
		<>
			<FormControl size='small' component='fieldset'>
				<FormLabel component='legend'>Text</FormLabel>
				<TextField
					id='standard-basic'
					variant='standard'
					defaultValue={text}
					onChange={event =>
						setProp(props => (props.text = event.target.value))
					}
				/>
			</FormControl>
			<FormControl size='small' component='fieldset'>
				<FormLabel component='legend'>Font size</FormLabel>
				<Slider
					color='primary'
					defaultValue={fontSize || 7}
					step={1}
					min={7}
					max={50}
					onChange={(_, value) => {
						setProp(props => (props.fontSize = value))
					}}
					valueLabelDisplay='auto'
				/>
			</FormControl>
		</>
	)
}

export default Settings
