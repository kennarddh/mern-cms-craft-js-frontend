import React from 'react'

import { Box, Typography, Grid, Button as MaterialButton } from '@mui/material'

import { useEditor, Element } from '@craftjs/core'

import Button from 'Components/Editor/Button/Button'
import Card from 'Components/Editor/Card/Card'
import Container from 'Components/Editor/Container/Container'
import Text from 'Components/Editor/Text/Text'

const Toolbox = () => {
	const { connectors } = useEditor(state => {
		return {
			connectors: state.connectors,
		}
	})

	return (
		<Box px={2} py={2}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justify='center'
				spacing={1}
			>
				<Box pb={2}>
					<Typography>Drag to add</Typography>
				</Box>
				<Grid container direction='column' item>
					<MaterialButton
						ref={ref =>
							connectors.create(
								ref,
								<Button
									text='Click me'
									variant='contained'
									size='small'
								/>
							)
						}
						variant='contained'
						data-cy='toolbox-button'
					>
						Button
					</MaterialButton>
				</Grid>
				<Grid container direction='column' item>
					<MaterialButton
						ref={ref =>
							connectors.create(ref, <Text text='Hi world' />)
						}
						variant='contained'
						data-cy='toolbox-text'
					>
						Text
					</MaterialButton>
				</Grid>
				<Grid container direction='column' item>
					<MaterialButton
						ref={ref =>
							connectors.create(
								ref,
								<Element canvas is={Container} padding={20} />
							)
						}
						variant='contained'
						data-cy='toolbox-container'
					>
						Container
					</MaterialButton>
				</Grid>
				<Grid container direction='column' item>
					<MaterialButton
						ref={ref => connectors.create(ref, <Card />)}
						variant='contained'
						data-cy='toolbox-card'
					>
						Card
					</MaterialButton>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Toolbox
