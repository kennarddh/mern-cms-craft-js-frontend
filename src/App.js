import React from 'react'

import { Grid, Box } from '@mui/material'

import { Editor, Frame } from '@craftjs/core'

import Header from 'Components/Editor/Header'
import Sidebar from 'Components/Sidebar'

import Container from 'Components/Editor/Components/Container/Container'
import Button from 'Components/Editor/Components/Button/Button'
import Card, {
	CardTop,
	CardBottom,
} from 'Components/Editor/Components/Card/Card'
import Text from 'Components/Editor/Components/Text/Text'
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
