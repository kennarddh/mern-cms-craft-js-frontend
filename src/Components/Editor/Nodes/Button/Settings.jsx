import React, { useState, useEffect } from 'react'

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

	const [VariantValue, SetVariantValue] = useState(variant)
	const [SizeValue, SetSizeValue] = useState(size)
	const [ColorValue, SetColorValue] = useState(color)

	useEffect(() => {
		setProp(props => (props.variant = VariantValue), 500)
	}, [VariantValue])

	useEffect(() => {
		setProp(props => (props.size = SizeValue), 500)
	}, [SizeValue])

	useEffect(() => {
		setProp(props => (props.color = ColorValue), 500)
	}, [ColorValue])

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
					value={size}
					onChange={(_, value) => SetSizeValue(value)}
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
					value={variant}
					onChange={(_, value) => SetVariantValue(value)}
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
					value={color}
					onChange={(_, value) => SetColorValue(value)}
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
