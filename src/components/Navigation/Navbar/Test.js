import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles  ((theme) => ({
  root: {
  },
  container: {
    backgroundColor: "grey",
    margin: 25
  },
  pacient:{
    margin: 25
  },
  icon: {
    marginLeft: '80%',
    marginTop: '15%',
    color: 'green',
    '&:hover': {
    color: 'yellow',
    cursor: 'pointer'
    },
  },
  button: {
    margin: 1,
  },
  search: {
    marginRight: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  info:{
    variant:"subtitle1",
     color:"initial",
     
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
  
  const [selectedDateu, setSelectedDateu] = React.useState(Date());

  const handleFrom = (date) => {
    setSelectedDate(date);
  };
  const handleUpto = (date1) => {
    setSelectedDateu(date1);
  };

  return (
    <div>
      <Grid container  spacing={2} direction='row' alignItems="flex-start" justify="flex-start">
      <Grid item xs={11} sm={11}><Typography variant="h3" color="initial">Paciente</Typography></Grid>
      <Grid item xs={1} sm={1}>
        <PersonAddIcon 
        fontSize= 'large' 
        onClick={event =>  window.location.href='/pacientform'}
        className={classes.icon}
        alt='Agregar paciente'
        />
        </Grid>      
      </Grid>
      
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="flex-start" 
      justify="flex-start"
      className={classes.pacient}
    >
      <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="256"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            </CardActionArea>
            </Card>
      </Grid>
      <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item sm={6}>          
      <Typography align= "left" className={classes.info}>Nombres</Typography>
                <Tooltip title="pago">
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
                                </Tooltip>
      </Grid>
      <Grid item sm={6}>
      <Typography align= "left" className={classes.info}>Apellido</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
      </Grid>
      <Grid item sm={12}>
      <Typography align= "left" className={classes.info}>Datos personales</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
      </Grid>
      <Grid item sm={6}>          
      <Typography align= "left" className={classes.info}>Alergias</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
      </Grid>
      <Grid item sm={6}>
      <Typography align= "left" className={classes.info}>Antecedentes</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
      </Grid>
      </Grid>
      <Grid item sm={6}>
      <Typography align= "left" className={classes.info}>Antecedentes</Typography>
                        <TextField
                                id="first"
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
      </Grid>
      </Paper>
        </Grid>
      </Grid>
    </div>
  );
}