import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    
    paper: {
    textAlign: 'center',
    padding: theme.spacing(10),
      color: theme.palette.text.secondary,
    },
    
  }));

export default function Footer() {
    const classes = useStyles;
    return (
        <div  >
            <List>
          
          <ListItem style={{display: 'flex', justifyContent: 'center'}} >
            <ListItemIcon><TwitterIcon fontSize="large"/></ListItemIcon>
            <ListItemIcon><InstagramIcon fontSize="large"/></ListItemIcon>
            <ListItemIcon><FacebookIcon fontSize="large"/></ListItemIcon>
            <ListItemIcon><LinkedInIcon fontSize="large"/></ListItemIcon>
          </ListItem>
        </List> 
        <Typography>
           <br /> <p className={classes.paper} style={{display: 'flex', justifyContent: 'center'}}>Copyright @ 2019 White Panda Media Pvt.Ltd</p> 
            <p className={classes.paper} style={{display: 'flex', justifyContent: 'center'}} >All rights reserved </p> 

            <p className={classes.paper} style={{display: 'flex', justifyContent: 'center'}} ><u>Privacy Policy</u> | <u>Terms of Service </u> {" "}| <u>Service Agreement</u> {" "}| <u>Contact us</u></p> 
        </Typography>
        </div>
    )
}
