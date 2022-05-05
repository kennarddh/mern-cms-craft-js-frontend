import React, { useState, useEffect } from 'react'

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

	const [FontSizeValue, SetFontSizeValue] = useState(fontSize || 7)

	useEffect(() => {
		setProp(props => (props.fontSize = FontSizeValue), 500)
	}, [FontSizeValue])

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
					value={FontSizeValue}
					step={1}
					min={7}
					max={50}
					onChange={(_, value) => SetFontSizeValue(value)}
					valueLabelDisplay='auto'
				/>
			</FormControl>
		</>
	)
}

export default Settings
