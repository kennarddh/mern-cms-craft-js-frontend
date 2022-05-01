import React from 'react'

import { Typography, Paper, Grid } from '@mui/material'

import { makeStyles } from '@mui/styles'

import { Editor, Frame, Element } from '@craftjs/core'

import Toolbox from 'Components/Editor/Toolbox'
import SettingsPanel from 'Components/Editor/SettingsPanel'
import Topbar from 'Components/Editor/Header'

import Container from 'Components/Editor/Container/Container'
import Button from 'Components/Editor/Button/Button'
import Card, { CardTop, CardBottom } from 'Components/Editor/Card/Card'
import Text from 'Components/Editor/Text/Text'

const useStyles = makeStyles(() => ({
	root: {
		padding: 0,
		background: 'rgb(252, 253, 253)',
	},
}))

export default function App() {
	const classes = useStyles()

	return (
		<div style={{ margin: '0 auto', width: '800px' }}>
			<Typography
				style={{ margin: '20px 0' }}
				variant='h5'
				align='center'
			>
				Basic Page Editor
			</Typography>
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
				<Topbar />
				<Grid container spacing={5} style={{ paddingTop: '10px' }}>
					<Grid item xs>
						<Frame>
							<Element
								canvas
								is={Container}
								padding={5}
								background='#eeeeee'
								data-cy='root-container'
							>
								<Card data-cy='frame-card' />
								<Button size='small' text='Click me' />
								<Text
									fontSize={20}
									text='Hi world!'
									data-cy='frame-text'
								/>
								<Element
									canvas
									is={Container}
									padding={6}
									background='#999999'
									data-cy='frame-container'
								>
									<Text
										size='small'
										text="It's me again!"
										data-cy='frame-container-text'
									/>
								</Element>
							</Element>
						</Frame>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.root}>
							<Toolbox />
							<SettingsPanel />
						</Paper>
					</Grid>
				</Grid>
			</Editor>
		</div>
	)
}
