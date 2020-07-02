import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
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
import Icon from '@material-ui/core/Icon';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles({
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
  }
});

const ImgMediaCard = function(props) {
  const classes = useStyles();

  const [pacients, setPacients] = React.useState(null)

  const [searchParams, setSearchParams] = React.useState({
    stringSearch: null,
    minimumData: null,
    maximumDate: null
  })
  const [strSearch, setStrSearch] = React.useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
  const [selectedDateu, setSelectedDateu] = React.useState(Date());

  React.useEffect(() => {
    if (pacients === null) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('pacients', config)
        .then((response) => {
          setPacients(response.data.data)
        })
        .catch((err) => {

        })
    }
  })

  const handleFrom = (date) => {
    setSelectedDate(date);
  };
  const handleUpto = (date1) => {
    setSelectedDateu(date1);
  };
  const handleStrChange = (e) => {
    setStrSearch(e.target.value)
  }

  const changeParams = () => {
    setSearchParams({
      stringSearch: strSearch
    })
  }
  let pacientsList = <h2>0 pacientes</h2>
  if(pacients != null) {
    pacientsList = pacients.map((pacient) => {
      let matches = true;
      if(searchParams.stringSearch != null) {
        const lowercaseFirstName = pacient.first_name.toLowerCase()
        const lowercaseLastName = pacient.last_name.toLowerCase()
        matches = lowercaseFirstName.includes(searchParams.stringSearch) || lowercaseLastName.includes(searchParams.stringSearch)
      }
      console.log(matches)
      if (matches) {
        return (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={6} key={pacient.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={pacient.img_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pacient.first_name + " " + pacient.last_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {pacient.marital_status + " " + pacient.blood_type + " " + pacient.gender }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        )
      } else {
        return null
      }
    })
  }

  return (
    <div>
      <Grid container  spacing={2} direction='row' alignItems="flex-start" justify="flex-start">
      <Grid item xs={11} sm={11}><Typography variant="h3" color="initial">Pacientes</Typography></Grid>
      <Grid item xs={1} sm={1}>
        <PersonAddIcon 
        fontSize= 'large' 
        onClick={event =>  window.location.href='/pacientform'}
        className={classes.icon}
        alt='Agregar paciente'
        />
        </Grid>      
      </Grid>
      <Grid container  spacing={2} direction='row' alignItems="flex-start" justify="flex-start" className={classes.container}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-search"
            type='search'
            variant="outlined"
            fullWidth
            placeholder="Buscar por nombre, apellido o diagnostico"
            value={strSearch}
            onChange={handleStrChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                autoOk
                fullWidth
                variant="inline"
                inputVariant="outlined"
                label="Desde"
                disableFuture
                orientation='landscape'
                format="dd/MM/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "end" }}
                onChange={date => handleFrom(date)}
              />
                </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
              orientation='landscape'
              clearable
              autoOk
              fullWidth
              variant="inline"
              inputVariant="outlined"
              label="Hasta"
              disableFuture
              format="dd/MM/yyyy"
              value={selectedDateu}
              InputAdornmentProps={{ position: "end" }}
              onChange={date1 => handleUpto(date1)}
            />
              </MuiPickersUtilsProvider>
        </Grid>
        <Grid container spacing={2} direction='row' alignItems="center" justify="flex-end" >
        <Grid item xs={2} sm={2} className={classes.search}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>search</Icon>}
        fullWidth
        onClick={changeParams}
      >
        Buscar
      </Button>
      </Grid>
        </Grid>
    </Grid>
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="flex-start" justify="flex-start"
      className={classes.pacient}
    >
      { pacientsList }
      
    </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard)