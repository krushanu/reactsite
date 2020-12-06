import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./Boxes.css"

const useStyles = (theme) => ({
	root: {
		minWidth: 275,
		textAlign: 'left',
		"&:hover": {
			boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		}
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	iconStyle: {
		fill: 'blue',
		verticalAlign: 'middle',
		marginRight: '0.8rem'
	},
	shortBodyStyle: {
		height: '150px',
	},
	longBodyStyle: {
		height: '198px',
	}
});

class Boxes extends Component {
	state = {};
	
	clicked =(e) => {
		switch (e.target.innerText) {
			case 'Intro':
				console.log("e1: ", e.target.innerText);
				window.location.href = '/developer/en/api/dummy1/intro'; //relative to domain
				break;
			case 'Developer\'s Guide':
				console.log("e2: ", e.target.innerText);
				window.location.href = '/developer/en/api/dummy1/guide'; //relative to domain	
				break;
			case 'API reference':
				console.log("e3: ", e.target.innerText);
				window.location.href = '/developer/en/api/dummy1/reference'; //relative to domain
				break;
			default:
				window.location.href = '/'; //relative to domain
				break;
		}
	}

	render() {
		const { classes, value } = this.props;
		return (
			<Fragment>
				<Card className={classes.root} variant="outlined">
					<CardContent>
						<Typography
							className={classes.title}
							component="h2"
							variant="h5"
							gutterBottom
						>
							<AcUnitIcon className={classes.iconStyle} />
							<strong>{value.header}</strong>
						</Typography>
						<Typography variant="body2" component="p" className={value.actionItem.length === 3 ? classes.shortBodyStyle : classes.longBodyStyle}>
							{value.body}
						</Typography>
					</CardContent>
					{value.actionItem.map(eachItem => {
						return(
						<Accordion disabled onClick={this.clicked}>
							<AccordionSummary
								expandIcon={<KeyboardArrowRightIcon />}
							>
							<Typography className={classes.heading}>{eachItem}</Typography>
							</AccordionSummary>
						</Accordion>
						)
					})}
						{/* <Accordion disabled onClick={this.clicked}>
							<AccordionSummary
								expandIcon={<KeyboardArrowRightIcon />}
							>
							<Typography className={classes.heading}>API reference</Typography>
							</AccordionSummary>
						</Accordion> */}
				</Card>
			</Fragment>
		);
	}
}

export default withStyles(useStyles)(Boxes);
