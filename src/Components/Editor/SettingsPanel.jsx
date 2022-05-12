import React from 'react'

import {
	Box,
	Chip,
	Grid,
	Typography,
	Button as MaterialButton,
} from '@mui/material'

import { useEditor } from '@craftjs/core'

export const SettingsPanel = () => {
	const { actions, selected, isEnabled } = useEditor((state, query) => {
		const currentNodeId = query.getEvent('selected').last()
		let selected

		if (currentNodeId) {
			selected = {
				id: currentNodeId,
				name: state.nodes[currentNodeId].data.name,
				settings:
					state.nodes[currentNodeId].related &&
					state.nodes[currentNodeId].related.settings,
				isDeletable: query.node(currentNodeId).isDeletable(),
			}
		}

		return {
			selected,
			isEnabled: state.options.enabled,
		}
	})

	return isEnabled && selected ? (
		<Box bgcolor='rgba(0, 0, 0, 0.06)' mt={2} px={2} py={2}>
			<Grid
				container
				direction='column'
				spacing={0}
				sx={{ marginBottom: 10 }}
			>
				<Grid item>
					<Box pb={2}>
						<Grid container alignItems='center'>
							<Grid item xs>
								<Typography variant='subtitle1'>
									Selected
								</Typography>
							</Grid>
							<Grid item>
								<Chip
									size='small'
									color='primary'
									label={selected.name}
								/>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				{selected.settings && <selected.settings />}
				{selected.isDeletable && (
					<MaterialButton
						variant='contained'
						color='primary'
						onClick={() => {
							actions.delete(selected.id)
						}}
					>
						Delete
					</MaterialButton>
				)}
			</Grid>
		</Box>
	) : null
}

export default SettingsPanel
