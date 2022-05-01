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
		props,
	} = useNode(node => ({
		props: node.data.props,
	}))

	return (
		<div>
			<FormControl size='small' component='fieldset'>
				<FormLabel component='legend'>Text</FormLabel>
				<TextField
					id='standard-basic'
					label='Standard'
					variant='standard'
					value={props.text}
					onChange={event =>
						setProp(props => (props.text = event.target.value))
					}
				/>
			</FormControl>
			<FormControl size='small' component='fieldset'>
				<FormLabel component='legend'>Size</FormLabel>
				<RadioGroup
					value={props.size}
					onChange={event =>
						setProp(props => (props.size = event.target.value))
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
					value={props.variant}
					onChange={event =>
						setProp(props => (props.variant = event.target.value))
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
					value={props.color}
					onChange={event =>
						setProp(props => (props.color = event.target.value))
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