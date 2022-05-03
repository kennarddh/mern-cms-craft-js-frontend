import Button from 'Components/Editor/Nodes/Button/Button'
import Card, { CardTop, CardBottom } from 'Components/Editor/Nodes/Card/Card'
import Container from 'Components/Editor/Nodes/Container/Container'
import Text from 'Components/Editor/Nodes/Text/Text'

const Nodes = {
	Button: {
		component: Button,
		name: 'Button',
	},
	Card: {
		component: Card,
		name: 'Card',
	},
	CardTop: {
		component: CardTop,
		name: 'Card Top',
	},
	CardBottom: {
		component: CardBottom,
		name: 'Card Bottom',
	},
	Container: {
		component: Container,
		name: 'Container',
	},
	Text: {
		component: Text,
		name: 'Text',
	},
}

export const Resolver = Object.keys(Nodes).reduce((acc, key) => {
	acc[key] = Nodes[key].component
	return acc
}, {})

export default Nodes
