import React from 'react'

import { Box, Typography, Grid, Button as MaterialButton } from '@mui/material'

import { useEditor } from '@craftjs/core'

import Nodes from 'Config/Nodes'

const Toolbox = () => {
	const { connectors } = useEditor(state => {
		return {
			connectors: state.connectors,
		}
	})

	return (
		<Box p={2}>
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
					mr={-1}
				>
					{Object.keys(Nodes).map(key => {
						const node = Nodes[key]

						if (!node.toolbox) return null

						return (
							<Grid
								key={node.id}
								container
								direction='column'
								xs={6}
								item
							>
								<MaterialButton
									ref={ref =>
										connectors.create(
											ref,
											<node.component />
										)
									}
									variant='contained'
								>
									{node.name}
								</MaterialButton>
							</Grid>
						)
					})}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Toolbox
