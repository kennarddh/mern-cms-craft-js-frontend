import React from 'react'

import { useNode } from '@craftjs/core'

import { Paper } from '@mui/material'

const Container = ({ background, padding = 0, children }) => {
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
			style={{ margin: '5px 0', background, padding: `${padding}px` }}
		>
			{children}
		</Paper>
	)
}

export default Container
