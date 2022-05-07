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
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
}) => {
	const {
		connectors: { connect, drag },
		editable,
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
				paddingTop: `${paddingTop}px`,
				paddingRight: `${paddingRight}px`,
				paddingBottom: `${paddingBottom}px`,
				paddingLeft: `${paddingLeft}px`,
				outline: editable ? '2px dashed red' : 'none',
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
		paddingTop: '5',
		paddingRight: '5',
		paddingBottom: '5',
		paddingLeft: '5',
	},
	related: {
		settings: Settings,
	},
}

export default Button
