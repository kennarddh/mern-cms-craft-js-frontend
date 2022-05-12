import React from 'react'

import { useNode } from '@craftjs/core'

import { Box } from '@mui/material'

import ContainerWrapper from './ContainerWrapper'

import Settings from './Settings'

const Container = ({
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
		editable,
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<Box
			ref={ref => connect(drag(ref))}
			sx={{
				background,
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
			{children}
		</Box>
	)
}

Container.craft = {
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

export default Container

export { ContainerWrapper }
