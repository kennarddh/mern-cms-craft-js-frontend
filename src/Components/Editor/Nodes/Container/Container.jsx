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

export default Container

export { InnerContainer }
