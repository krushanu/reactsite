import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Boxes from '../components/Boxes';
import {siteData} from './../util/util'

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
	header: {
		backgroundColor: 'blue',
		color: '#fefefe',
		fontSize: '2.2rem',
		textAlign: 'left',
		padding: '1.5rem 10rem',
		marginBottom: '2.5rem',
		marginLeft: '-32px'
	},
});

class Landing extends Component {
	componentDidMount() {
		console.log('siteData: ', siteData);
	}

	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<div className={classes.header}> Documentation </div>

				<Grid
					container
					className={classes.root}
					direction="row"
					justify="space-evenly"
					alignItems="baseline"
					spacing={1}
				>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid item xs={12} sm={10}>
								<Grid
									alignItems="flex-start"
									container
									justify="center"
									spacing={4}
								>
									{siteData.data.map((value) => (
										<Grid key={value} item xs={12} sm={6} md={4}>
											<Boxes value={value} className={classes.paper} />
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(useStyles)(Landing);
