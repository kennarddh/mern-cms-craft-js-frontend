import React, { useState } from 'react'

import { Grid, Tabs, Tab } from '@mui/material'

import Toolbox from 'Components/Editor/Toolbox'
import SettingsPanel from 'Components/Editor/SettingsPanel'

const Sidebar = () => {
	const [Value, SetValue] = useState(0)

	return (
		<Grid
			item
			xs={3}
			sx={{
				position: 'fixed',
				top: 0,
				right: 0,
				overflowY: 'scroll',
				height: '100vh',
				flexWrap: 'nowrap',
			}}
			direction='column'
			container
		>
			<Grid item xs={1}>
				<Tabs
					value={Value}
					onChange={(_, value) => {
						SetValue(value)
					}}
				>
					<Tab label='Toolbox' id={0} />
					<Tab label='Settings Panel' id={1} />
				</Tabs>
			</Grid>
			<Grid item xs={11}>
				{Value === 0 && <Toolbox />}
				{Value === 1 && <SettingsPanel />}
			</Grid>
		</Grid>
	)
}

export default Sidebar
