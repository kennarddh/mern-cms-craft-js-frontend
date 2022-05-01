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
		>
			{text}
		</MaterialButton>
	)
}

Button.craft = {
	props: {
		size: 'small',
		variant: 'text',
		color: 'primary',
	},
	related: {
		settings: Settings,
	},
}

export default Button
