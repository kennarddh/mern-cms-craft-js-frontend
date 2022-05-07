import React from 'react'

import { useNode, Element } from '@craftjs/core'

import InnerContainer from './InnerContainer'

const Container = () => {
	const {
		connectors: { connect, drag },
	} = useNode(state => {
		return {
			editable: state.events.selected,
		}
	})

	return (
		<div ref={ref => connect(drag(ref))}>
			<Element id='InnerContainer' is={InnerContainer} canvas />
		</div>
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
}

export default Container

export { InnerContainer }
