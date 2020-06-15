import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';



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
  },  
  icon: {
    width: "30px",
    height: "30px",
    viewBox: "0 0 100 100"
  },
  table: {
    width: '100%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A69C68',
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
  const { useState } = React;
  
  const [data, setData] = useState([
    { consult: 'Dolor de cabeza fuerte', date: '20/02/2020', description: 'text' },
  ]);

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
      
      </Paper>
      </Grid>
      <Grid item sm={12}>
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Consultas</Typography>}
      columns={[
        
        { title: 'Motivo de consulta', field: 'consult' },
        
        { title: 'Fecha', field: 'date'},
        
      ]}
      data={data}
      detailPanel={[
        {
          tooltip: 'Mostrar Detalles',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#43A047',
                }}
              >
                {rowData.description}
              </div>
            )
          },
        },
      ]}
      localization={{
        header: {
            actions: 'Informe'
        },
        body: {
            emptyDataSourceMessage: 'Este paciente no tiene consultas previas',
            filterRow: {
                filterTooltip: 'Filtrar',
            },
            addTooltip: 'Agregar'
        },        
        toolbar:{
          searchPlaceholder: 'Buscar', 
          exportName: 'Exportar'
        },
        pagination:{
          labelRowsSelect: 'Filas',
          labelDisplayedRows: '{from}-{to} de {count}',
          firstTooltip: 'Inicio',
          lastTooltip: 'Final',
          nextTooltip: 'Siguiente pagina',
          previousTooltip: 'Pagina anterior'
        },
    }}
    actions={[
        {
          icon: () => <Check className={classes.icon}/>,
          tooltip: 'Habilitado',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },       
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        filterCellStyle: {
          backgroundColor: '#1111'
        },
        detailPanelStyle: {
            backgroundColor: '#EEE',
        },
        searchFieldStyle: {
          backgroundColor: '#91C5D3', 
          width: '100%'
        },
        searchFieldVariant: 'outlined',
        actionsColumnIndex: -1,
        exportButton: false,
        pageSize: 5,
        pageSizeOptions: [5, 10, 15],       
      }}
    />
      </Grid>
        
      </Grid>
    </div>
  );
}