import React from 'react'

import { useNode } from '@craftjs/core'

import { FormControl, FormLabel, Slider } from '@mui/material'

const Settings = () => {
	const {
		padding,
		actions: { setProp },
	} = useNode(node => ({
		padding: node.data.props.padding,
	}))

	return (
		<FormControl fullWidth={true} margin='normal' component='fieldset'>
			<FormLabel component='legend'>Padding</FormLabel>
			<Slider
				defaultValue={padding}
				onChange={(_, value) =>
					setProp(props => (props.padding = value), 500)
				}
			/>
		</FormControl>
	)
}

export default Settings
