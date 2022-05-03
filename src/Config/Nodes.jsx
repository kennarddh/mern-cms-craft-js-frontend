import Button from 'Components/Editor/Nodes/Button/Button'
import Card, { CardTop, CardBottom } from 'Components/Editor/Nodes/Card/Card'
import Container from 'Components/Editor/Nodes/Container/Container'
import Text from 'Components/Editor/Nodes/Text/Text'

const Nodes = {
	Button: {
		id: 'Button',
		component: Button,
		name: 'Button',
		toolbox: true,
	},
	Card: {
		id: 'Card',
		component: Card,
		name: 'Card',
		toolbox: true,
	},
	CardTop: {
		id: 'CardTop',
		component: CardTop,
		name: 'Card Top',
		toolbox: false,
	},
	CardBottom: {
		id: 'CardBottom',
		component: CardBottom,
		name: 'Card Bottom',
		toolbox: false,
	},
	Container: {
		id: 'Container',
		component: Container,
		name: 'Container',
		toolbox: true,
	},
	Text: {
		id: 'Text',
		component: Text,
		name: 'Text',
		toolbox: true,
	},
}

export const Resolver = Object.keys(Nodes).reduce((acc, key) => {
	acc[key] = Nodes[key].component
	return acc
}, {})

export default Nodes
