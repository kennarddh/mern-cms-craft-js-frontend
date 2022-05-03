import React from 'react'

import { useNode } from '@craftjs/core'

import { Button as MaterialButton } from '@mui/material'

import Settings from './Settings'

const Button = ({ size, variant, color, text }) => {
	const {
		connectors: { connect, drag },
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<MaterialButton
			ref={ref => connect(drag(ref))}
			size={size}
			variant={variant}
			color={color}
			style={{ textTransform: 'none' }}
		>
			{text}
		</MaterialButton>
	)
}

Button.craft = {
	props: {
		size: 'small',
		variant: 'contained',
		color: 'primary',
		text: 'Button',
	},
	related: {
		settings: Settings,
	},
}

export default Button
