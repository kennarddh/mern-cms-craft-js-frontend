import React, { useState, useEffect } from 'react'

import { useNode } from '@craftjs/core'

import { FormControl, FormLabel, Slider } from '@mui/material'

const Settings = () => {
	const {
		id,
		padding,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		actions: { setProp },
	} = useNode(node => ({
		padding: node.data.props.padding,
		marginTop: node.data.props.marginTop,
		marginRight: node.data.props.marginRight,
		marginBottom: node.data.props.marginBottom,
		marginLeft: node.data.props.marginLeft,
	}))

	const [PaddingValue, SetPaddingValue] = useState(padding)
	const [MarginTopValue, SetMarginTopValue] = useState(marginTop)
	const [MarginRightValue, SetMarginRightValue] = useState(marginRight)
	const [MarginBottomValue, SetMarginBottomValue] = useState(marginBottom)
	const [MarginLeftValue, SetMarginLeftValue] = useState(marginLeft)

	useEffect(() => {
		setProp(props => (props.padding = PaddingValue), 500)
	}, [PaddingValue])

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

	return (
		<>
			<FormControl fullWidth={true} margin='normal' component='fieldset'>
				<FormLabel component='legend'>Padding</FormLabel>
				<Slider
					value={PaddingValue}
					onChange={(_, value) => SetPaddingValue(value)}
				/>
			</FormControl>
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
		</>
	)
}

export default Settings
