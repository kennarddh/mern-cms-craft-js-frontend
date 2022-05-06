import React from 'react'

import { useNode } from '@craftjs/core'

import { Button as MaterialButton } from '@mui/material'

import Settings from './Settings'

const Button = ({
	size,
	variant,
	color,
	text,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
}) => {
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
			sx={{
				textTransform: 'none',
				marginTop: `${marginTop}px`,
				marginRight: `${marginRight}px`,
				marginBottom: `${marginBottom}px`,
				marginLeft: `${marginLeft}px`,
			}}
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
		marginTop: '0',
		marginRight: '0',
		marginBottom: '0',
		marginLeft: '0',
	},
	related: {
		settings: Settings,
	},
}

export default Button
