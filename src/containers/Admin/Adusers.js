import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    width: '100%',
    height: '90%',
    position: 'center',
    align: 'center',
  },
  icon: {
    width: "30px",
    height: "30px",
    viewBox: "0 0 100 100"
  },
  table: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A69C68',
  }
}));

export default function UserTable() {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Administrador de usuarios</Typography>}
      columns={[
        
        { title: 'Nombre', field: 'name' },
        { title: 'Apellido', field: 'surname' },
        { title: 'Correo', field: 'email'},
        { title: 'Usuario', field: 'user'},
        { title: 'Area', 
          field: 'area', 
          lookup: { 36: 'Neurologia', 98: 'Neurocirugia'}
        },
        { title: 'Medic ID', field: 'cmedico'},
        { title: 'Creado', field: 'created'},
        
      ]}
      data={[
        { name: 'Jose', surname: 'Orellana', email: 'jose.mom@gmail.com', user: 'Jose.mom',  area: 36, cmedico: '4009', created: '20/02/2020' },
        { name: 'Fernando', surname: 'Martinez', email: 'ferujap', user: 'ferjmt',  area: 98, cmedico: '4010', created: '20/08/2020' },
      ]}
      localization={{
        header: {
            actions: 'Acciones'
        },
        body: {
            emptyDataSourceMessage: 'No existen usuarios registrados',
            filterRow: {
                filterTooltip: 'Filtrar',
            },
        },        
        toolbar:{
          searchPlaceholder: 'Buscar', 
          exportName: 'Exportar'
        },
        pagination:{
          labelRowsSelect: 'Columnas',
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsPerPage: '10',
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
        rowData => ({
          icon: ()=> <War className= {classes.icon}/>,
          tooltip: 'Inhabilitar',
        }),        
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        cellStyle: {
          backgroundColor: '#EEE',
        },
        actionsCellStyle: {
          backgroundColor: '#EEE'
        },
        filterCellStyle: {
          backgroundColor: '#1111'
        },
        searchFieldStyle: {
          backgroundColor: '#91C5D3', 
          width: '100%'
        },
        searchFieldVariant: 'outlined',
        actionsColumnIndex: -1,
        exportButton: true,
        exportCsv: (columns, data) => {
          alert('You should develop a code to export ' + data.length + ' rows');
        },
        pageSize: '10',
        pageSizeOptions: [10, 15, 20],       
      }}
    />
    </div>
  );
}