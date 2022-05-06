import React, { useState, useEffect } from 'react'

import { useNode } from '@craftjs/core'

import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	TextField,
	Slider,
} from '@mui/material'

const Settings = () => {
	const {
		actions: { setProp },
		text,
		variant,
		size,
		color,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
	} = useNode(node => ({
		text: node.data.props.text,
		variant: node.data.props.variant,
		size: node.data.props.size,
		color: node.data.props.color,
		marginTop: node.data.props.marginTop,
		marginRight: node.data.props.marginRight,
		marginBottom: node.data.props.marginBottom,
		marginLeft: node.data.props.marginLeft,
		paddingTop: node.data.props.paddingTop,
		paddingRight: node.data.props.paddingRight,
		paddingBottom: node.data.props.paddingBottom,
		paddingLeft: node.data.props.paddingLeft,
	}))

	const [VariantValue, SetVariantValue] = useState(variant)
	const [SizeValue, SetSizeValue] = useState(size)
	const [ColorValue, SetColorValue] = useState(color)
	const [MarginTopValue, SetMarginTopValue] = useState(marginTop)
	const [MarginRightValue, SetMarginRightValue] = useState(marginRight)
	const [MarginBottomValue, SetMarginBottomValue] = useState(marginBottom)
	const [MarginLeftValue, SetMarginLeftValue] = useState(marginLeft)

	const [PaddingTopValue, SetPaddingTopValue] = useState(paddingTop)
	const [PaddingRightValue, SetPaddingRightValue] = useState(paddingRight)
	const [PaddingBottomValue, SetPaddingBottomValue] = useState(paddingBottom)
	const [PaddingLeftValue, SetPaddingLeftValue] = useState(paddingLeft)

	useEffect(() => {
		setProp(props => (props.variant = VariantValue), 500)
	}, [VariantValue])

	useEffect(() => {
		setProp(props => (props.size = SizeValue), 500)
	}, [SizeValue])

	useEffect(() => {
		setProp(props => (props.color = ColorValue), 500)
	}, [ColorValue])

	useEffect(() => {
		setProp(props => (props.marginTop = MarginTopValue), 500)
	}, [MarginTopValue])

	useEffect(() => {
		setProp(props => (props.marginRight = MarginRightValue), 500)
	}, [MarginRightValue])

	useEffect(() => {
		setProp(props => (props.marginBottom = MarginBottomValue), 500)
	}, [MarginBottomValue])

	useEffect(() => {
		setProp(props => (props.marginLeft = MarginLeftValue), 500)
	}, [MarginLeftValue])

	useEffect(() => {
		setProp(props => (props.paddingTop = PaddingTopValue), 500)
	}, [PaddingTopValue])

	useEffect(() => {
		setProp(props => (props.paddingRight = PaddingRightValue), 500)
	}, [PaddingRightValue])

	useEffect(() => {
		setProp(props => (props.paddingBottom = PaddingBottomValue), 500)
	}, [PaddingBottomValue])

	useEffect(() => {
		setProp(props => (props.paddingLeft = PaddingLeftValue), 500)
	}, [PaddingLeftValue])

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

			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Margin Top</FormLabel>
				<Slider
					value={MarginTopValue}
					onChange={(_, value) => SetMarginTopValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Margin Right</FormLabel>
				<Slider
					value={MarginRightValue}
					onChange={(_, value) => SetMarginRightValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Margin Bottom</FormLabel>
				<Slider
					value={MarginBottomValue}
					onChange={(_, value) => SetMarginBottomValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Margin Left</FormLabel>
				<Slider
					value={MarginLeftValue}
					onChange={(_, value) => SetMarginLeftValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Padding Top</FormLabel>
				<Slider
					value={PaddingTopValue}
					onChange={(_, value) => SetPaddingTopValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Padding Right</FormLabel>
				<Slider
					value={PaddingRightValue}
					onChange={(_, value) => SetPaddingRightValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Padding Bottom</FormLabel>
				<Slider
					value={PaddingBottomValue}
					onChange={(_, value) => SetPaddingBottomValue(value)}
				/>
			</FormControl>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Padding Left</FormLabel>
				<Slider
					value={PaddingLeftValue}
					onChange={(_, value) => SetPaddingLeftValue(value)}
				/>
			</FormControl>
		</>
	)
}

export default Settings
