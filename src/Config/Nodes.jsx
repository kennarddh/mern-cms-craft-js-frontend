import Button from 'Components/Editor/Nodes/Button/Button'
import Card, { CardTop, CardBottom } from 'Components/Editor/Nodes/Card/Card'
import Container from 'Components/Editor/Nodes/Container/Container'
import Text from 'Components/Editor/Nodes/Text/Text'

const Nodes = {
	Button: {
		component: Button,
		name: 'Button',
		toolbox: true,
	},
	Card: {
		component: Card,
		name: 'Card',
		toolbox: true,
	},
	CardTop: {
		component: CardTop,
		name: 'Card Top',
		toolbox: false,
	},
	CardBottom: {
		component: CardBottom,
		name: 'Card Bottom',
		toolbox: false,
	},
	Container: {
		component: Container,
		name: 'Container',
		toolbox: true,
	},
	Text: {
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
