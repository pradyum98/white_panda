// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import { mergeClasses } from '@material-ui/styles';
// import Button from './Button';

// const useStyles = makeStyles(theme => ({
    
//     paper: {
     
//       color: theme.palette.text.secondary,
//     },
    
//   }));
// export default function SimpleContainer() {
//     const classes = useStyles();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Typography component="div" style={{ backgroundColor: '#f3f9f6' , width: '150vh'}} >
//             <p>Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet </p>
//             <p className ={classes.paper}>n 2014, White Panda released a mashup consisting of Disclosure's and Sam Smith's "Latch" and Mike Posner's "Cooler than Me", titled "Cooler than Latch". It was first included in White Panda's mix album Bearly Legal (2013)[4] and was eventually released as a single.[5] The duo released their album titled The Pawprint, in 2015.[6]</p>
//         </Typography>
//         <Button />
//       </Container>
//     </React.Fragment>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from './Button';
import Typography from '@material-ui/core/Typography';



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
});

const useStyles1 = makeStyles(theme => ({
    paper1:{
        color:'#3ae8d1',
    },
    
    paper: {
     
      color: theme.palette.text.secondary,
    },
    
  }));

export default function SimpleCard() {
  const classes = useStyles();
  const classes1 = useStyles1();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} style={{ backgroundColor: '#f3f9f6' }}>
      <CardContent>
        
        <Typography component="div"  >
             <p className ={classes1.paper1}>Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet </p>
             <p className ={classes1.paper}>If your're wondering about an easy way to place orders in large numbers, we provide a way customized for that.
             Downlaod our excel sheet, and fill the order brief in the prescribed format and submit. In case you need any help , <u> we are just a click away to assist you in placing your order</u>
             </p>
        </Typography>
         <Button text="Order via Excel Sheet"/>
        
         
        
      </CardContent>
      
    </Card>
  );
}
