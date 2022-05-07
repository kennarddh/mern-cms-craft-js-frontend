import React, { useState, useEffect } from 'react'

import { useNode } from '@craftjs/core'

import { FormControl, FormLabel, Slider } from '@mui/material'

const Settings = () => {
	const {
		id,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		actions: { setProp },
	} = useNode(node => ({
		marginTop: node.data.props.marginTop,
		marginRight: node.data.props.marginRight,
		marginBottom: node.data.props.marginBottom,
		marginLeft: node.data.props.marginLeft,
		paddingTop: node.data.props.paddingTop,
		paddingRight: node.data.props.paddingRight,
		paddingBottom: node.data.props.paddingBottom,
		paddingLeft: node.data.props.paddingLeft,
	}))

	const [MarginTopValue, SetMarginTopValue] = useState(marginTop)
	const [MarginRightValue, SetMarginRightValue] = useState(marginRight)
	const [MarginBottomValue, SetMarginBottomValue] = useState(marginBottom)
	const [MarginLeftValue, SetMarginLeftValue] = useState(marginLeft)
	const [PaddingTopValue, SetPaddingTopValue] = useState(paddingTop)
	const [PaddingRightValue, SetPaddingRightValue] = useState(paddingRight)
	const [PaddingBottomValue, SetPaddingBottomValue] = useState(paddingBottom)
	const [PaddingLeftValue, SetPaddingLeftValue] = useState(paddingLeft)

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
			{id !== 'ROOT' ? (
				<>
					<FormControl
						fullWidth={true}
						margin='normal'
						component='fieldset'
					>
						<FormLabel component='legend'>Margin Top</FormLabel>
						<Slider
							value={MarginTopValue}
							onChange={(_, value) => SetMarginTopValue(value)}
						/>
					</FormControl>
					<FormControl
						fullWidth={true}
						margin='normal'
						component='fieldset'
					>
						<FormLabel component='legend'>Margin Right</FormLabel>
						<Slider
							value={MarginRightValue}
							onChange={(_, value) => SetMarginRightValue(value)}
						/>
					</FormControl>
					<FormControl
						fullWidth={true}
						margin='normal'
						component='fieldset'
					>
						<FormLabel component='legend'>Margin Bottom</FormLabel>
						<Slider
							value={MarginBottomValue}
							onChange={(_, value) => SetMarginBottomValue(value)}
						/>
					</FormControl>
					<FormControl
						fullWidth={true}
						margin='normal'
						component='fieldset'
					>
						<FormLabel component='legend'>Margin Left</FormLabel>
						<Slider
							value={MarginLeftValue}
							onChange={(_, value) => SetMarginLeftValue(value)}
						/>
					</FormControl>
				</>
			) : null}
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
