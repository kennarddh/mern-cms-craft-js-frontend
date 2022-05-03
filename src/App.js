import React from 'react'

import { Grid, Box } from '@mui/material'

import { Editor, Frame } from '@craftjs/core'

import Header from 'Components/Editor/Header'
import Sidebar from 'Components/Sidebar'

import Container from 'Components/Editor/Nodes/Container/Container'
import Button from 'Components/Editor/Nodes/Button/Button'
import Card, { CardTop, CardBottom } from 'Components/Editor/Nodes/Card/Card'
import Text from 'Components/Editor/Nodes/Text/Text'
import DefaultNode from 'Config/DefaultNode'

const App = () => {
	return (
		<Editor
			resolver={{
				Card,
				Button,
				Text,
				Container,
				CardTop,
				CardBottom,
			}}
		>
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
