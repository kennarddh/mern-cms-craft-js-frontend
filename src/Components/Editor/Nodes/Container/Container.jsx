import React from 'react'

import { useNode } from '@craftjs/core'

import { Paper } from '@mui/material'

import Settings from './Settings'

const Container = ({
	background,
	padding = 0,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	children,
}) => {
	const {
		connectors: { connect, drag },
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<Paper
			ref={ref => connect(drag(ref))}
			style={{
				marginTop: `${marginTop}px`,
				marginRight: `${marginRight}px`,
				marginBottom: `${marginBottom}px`,
				marginLeft: `${marginLeft}px`,
				background,
				padding: `${padding}px`,
			}}
		>
			{children}
		</Paper>
	)
}

Container.craft = {
	props: {
		padding: 20,
		marginTop: 5,
		marginRight: 0,
		marginBottom: 5,
		marginLeft: 0,
	},
	related: {
		settings: Settings,
	},
}

export default Container
