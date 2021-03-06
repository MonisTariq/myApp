import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ({confirmed,recovered,deaths,lastUpdate}) =>
{
	    if(!confirmed)
			{
				return 'Loading......';
			}

return(

<div className={styles .container}>
	<Grid container spacng={3} justify="center">
		<Grid item component={Card}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>Infected</Typography>
				<Typography varient ="h5"> confirmed.value </Typography>
				<Typography color="textSecondary"> REAL DATE </Typography>
				<Typography varient="body2"> Number of active cases of COVID-19</Typography>
			</CardContent>
		</Grid>
		<Grid item component={Card}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>Recovered</Typography>
				<Typography varient ="h5"> REAL DATA </Typography>
				<Typography color="textSecondary"> REAL DATE </Typography>
				<Typography varient="body2"> Number of recoveries from COVID-19</Typography>
			</CardContent>
		</Grid>
		<Grid item component={Card}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>Deaths</Typography>
				<Typography varient ="h5"> REAL DATA </Typography>
				<Typography color="textSecondary"> REAL DATE </Typography>
				<Typography varient="body2"> Number of deaths due to COVID-19</Typography>
			</CardContent>
		</Grid>
	</Grid>
</div>	


)

}

export default Cards;