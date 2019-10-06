import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UpperContainer from './UpperContainer';
import Listitem from './Listitem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(10),
    textAlign: 'left',
    color: '#3ae8d1',
    backgroundColor: '#f3f9f6'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
        <UpperContainer />
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Blog/ Article"
                  cost ="from $500"
                  />
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Newsletter/E-mailer"
                  cost ="from $1000"
            />
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Whitepaper"
                  cost ="from $2000"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="e-book"
                  cost="from $1000"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Report/Guide"
                  cost ="from $1000"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Product Description"
                  cost="from $500"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Website Content"
                  cost="from $1000"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Press Release"
                  cost="from $2000"/>
        </Grid>
        <Grid item xs={4}>
        <Listitem title="Video Script"
                  cost="from $1000"/>
        </Grid>
        <Grid item xs={4}>
          <Listitem title="Company Profile / Brochure"
                    cost="from $2000"/>
        </Grid>
      </Grid>
    </div>
  );
}
