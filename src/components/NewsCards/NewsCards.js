import React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard.js'

const infoCards = [
	{color: '#f0bd48', title:'Ultimas Noticias', text: 'Noticias'}
];


const NewsCards = ({ articles}) => {

	//uso de styles que fue importado
	const classes = useStyles();

	if(!articles.length){
		return(
			<Grow in>
				<Grid className={classes.container} container alignItems = "stretch" spacing={3}>
						{infoCards.map((infoCard) =>(
							<Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}> 

								<div className={classes.card} style={{backgroundColor: infoCard.color}}>
									<Typography variant="h5">{infoCard.title}</Typography>
									{infoCard.info? (<Typography variant="h6">
										<strong>
											{infoCard.title.split(' ')[2]}:
										</strong>
										<br />
										{infoCard.info}
										</Typography>): null}

									<Typography variant="h6"> Intenta decir: <br /> <i>{infoCard.text}</i></Typography>	

								</div>
							</Grid>

							))}
				</Grid>
			</Grow>
			);
	}


	return (
		<Grow in>
			<Grid className={classes.container} container alignItems = "stretch" spacing={3}>
				{articles?.map((article, i) => (
					<Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
					<NewsCard article={article} i={i} />
					</Grid>
					
				))}
			</Grid>
	
		</Grow>
		);
}

export default NewsCards;