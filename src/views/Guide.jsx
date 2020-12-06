import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

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

class Guide extends Component {
    state = {  }
    render() { 
		const { classes } = this.props;

        return ( 
            <Fragment>
				<div className={classes.header}> Guide </div>
                </Fragment>
         );
    }
}
 
export default withStyles(useStyles)(Guide);