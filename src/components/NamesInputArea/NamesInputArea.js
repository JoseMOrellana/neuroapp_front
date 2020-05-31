import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const NamesInputArea = React.memo((props) => (
    <Grid container spacing={2}>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                value={props.first_name}
                onChange={props.onChangeFnc}
                />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField
                autoComplete="sname"
                name="second_name"
                variant="outlined"
                required
                fullWidth
                id="second_name"
                label="Segundo Nombre"
                value={props.second_name}
                onChange={props.onChangeFnc}
                 />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField
                autoComplete="lname"
                name="last_name"
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Apellido"
                value={props.last_name}
                onChange={props.onChangeFnc}
                 />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField
                autoComplete="lname2"
                name="second_last_name"
                variant="outlined"
                required
                fullWidth
                id="second_last_name"
                label="Segundo Apellido"
                value={props.second_last_name}
                onChange={props.onChangeFnc}
                />
        </Grid>
    </Grid>
), (prevProps, nextProps) => {
    return Object.keys(nextProps).reduce((currentResult, name) => {
        if ( name == "onChangeFnc") {
            return currentResult
        }
        return currentResult && ( prevProps[name] === nextProps[name] )
    }, true)        
})

export default NamesInputArea