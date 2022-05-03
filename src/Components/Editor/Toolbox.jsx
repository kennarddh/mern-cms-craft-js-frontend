import React from 'react'

import { Box, Typography, Grid, Button as MaterialButton } from '@mui/material'

import { useEditor, Element } from '@craftjs/core'

import Button from 'Components/Editor/Nodes/Button/Button'
import Card from 'Components/Editor/Nodes/Card/Card'
import Container from 'Components/Editor/Nodes/Container/Container'
import Text from 'Components/Editor/Nodes/Text/Text'

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
				<Grid
					container
					direction='row'
					alignItems='center'
					justify='center'
					spacing={2}
				>
					<Grid container direction='column' xs={6} item>
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
						>
							Button
						</MaterialButton>
					</Grid>
					<Grid container direction='column' xs={6} item>
						<MaterialButton
							ref={ref =>
								connectors.create(ref, <Text text='Hi world' />)
							}
							variant='contained'
						>
							Text
						</MaterialButton>
					</Grid>
					<Grid container direction='column' xs={6} item>
						<MaterialButton
							ref={ref =>
								connectors.create(
									ref,
									<Element
										canvas
										is={Container}
										padding={20}
									/>
								)
							}
							variant='contained'
						>
							Container
						</MaterialButton>
					</Grid>
					<Grid container direction='column' xs={6} item>
						<MaterialButton
							ref={ref => connectors.create(ref, <Card />)}
							variant='contained'
						>
							Card
						</MaterialButton>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Toolbox
