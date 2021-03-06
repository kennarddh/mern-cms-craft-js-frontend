import Button from 'Components/Editor/Nodes/Button/Button'
import Container, {
	ContainerWrapper,
} from 'Components/Editor/Nodes/Container/Container'
import Text from 'Components/Editor/Nodes/Text/Text'

const Nodes = {
	Button: {
		id: 'Button',
		component: Button,
		name: 'Button',
		toolbox: true,
	},
	Container: {
		id: 'Container',
		component: Container,
		name: 'Container',
		toolbox: false,
	},
	ContainerWrapper: {
		id: 'ContainerWrapper',
		component: ContainerWrapper,
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
