import React from 'react'

import { Grid, Box } from '@mui/material'

import { Editor, Frame } from '@craftjs/core'

import Header from 'Components/Editor/Header'
import Sidebar from 'Components/Sidebar'

import { Resolver } from 'Config/Nodes'

import DefaultNode from 'Config/DefaultNodes'

const App = () => {
	return (
		<Editor resolver={Resolver}>
			<Grid container>
				<Grid item xs={9}>
					<Header />
					<Box
						sx={{
							overflowY: 'scroll',
							height: 'calc(100vh - 75px)',
						}}
					>
						<Frame data={DefaultNode} />
					</Box>
				</Grid>
				<Sidebar />
			</Grid>
		</Editor>
	)
}

export default App
