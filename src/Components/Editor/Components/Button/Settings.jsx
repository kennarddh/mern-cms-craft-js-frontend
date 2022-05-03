import React from 'react'

import { useNode } from '@craftjs/core'

import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	TextField,
} from '@mui/material'

const Settings = () => {
	const {
		actions: { setProp },
		text,
		variant,
		size,
		color,
	} = useNode(node => ({
		text: node.data.props.text,
		variant: node.data.props.variant,
		size: node.data.props.size,
		color: node.data.props.color,
	}))

	return (
		<div>
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
				<FormLabel component='legend'>Size</FormLabel>
				<RadioGroup
					defaultValue={size}
					onChange={(_, value) =>
						setProp(props => (props.size = value))
					}
				>
					<FormControlLabel
						label='Small'
						value='small'
						control={<Radio size='small' color='primary' />}
					/>
					<FormControlLabel
						label='Medium'
						value='medium'
						control={<Radio size='small' color='primary' />}
					/>
					<FormControlLabel
						label='Large'
						value='large'
						control={<Radio size='small' color='primary' />}
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>Variant</FormLabel>
				<RadioGroup
					defaultValue={variant}
					onChange={(_, value) =>
						setProp(props => (props.variant = value))
					}
				>
					<FormControlLabel
						label='Text'
						value='text'
						control={<Radio size='small' color='primary' />}
					/>
					<FormControlLabel
						label='Outlined'
						value='outlined'
						control={<Radio size='small' color='primary' />}
					/>
					<FormControlLabel
						label='Contained'
						value='contained'
						control={<Radio size='small' color='primary' />}
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>Color</FormLabel>
				<RadioGroup
					defaultValue={color}
					onChange={(_, value) =>
						setProp(props => (props.color = value))
					}
				>
					<FormControlLabel
						label='Primary'
						value='primary'
						control={<Radio size='small' color='primary' />}
					/>
					<FormControlLabel
						label='Seconday'
						value='secondary'
						control={<Radio size='small' color='primary' />}
					/>
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export default Settings
