import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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
  avatar: {
    backgroundColor: '#3ae8d1',
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <CardContent>
        
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            W
          </Avatar>
        }
        
        title={props.title}
        subheader = {props.cost} 
        
      />
        <Typography className={classes.pos} color="textSecondary">
          Typically 450-400 words , an e-book is perfect for your target audience ranging from prospective customers to users.
        </Typography>
        
         <Button text="order"/>
        
      </CardContent>
      
    </Card>
  );
}
