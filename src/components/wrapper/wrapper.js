import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    direction: 'column',
    padding: theme.spacing(2),
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
 
 

}));

 function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=7</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid