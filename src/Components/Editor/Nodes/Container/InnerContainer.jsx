import React from 'react'

import { useNode } from '@craftjs/core'

import { Paper } from '@mui/material'

import Settings from './Settings'

const InnerContainer = ({
	background,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
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
				background,
				marginTop: `${marginTop}px`,
				marginRight: `${marginRight}px`,
				marginBottom: `${marginBottom}px`,
				marginLeft: `${marginLeft}px`,
				paddingTop: `${paddingTop}px`,
				paddingRight: `${paddingRight}px`,
				paddingBottom: `${paddingBottom}px`,
				paddingLeft: `${paddingLeft}px`,
			}}
		>
			{children}
		</Paper>
	)
}

InnerContainer.craft = {
	props: {
		paddingTop: 20,
		paddingRight: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		marginTop: 5,
		marginRight: 0,
		marginBottom: 5,
		marginLeft: 0,
	},
	related: {
		settings: Settings,
	},
}

export default InnerContainer
