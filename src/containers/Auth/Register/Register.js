import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import logo from '../../../img/register.svg'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    fontSize: theme.typography.pxToRem(20),
    margin: theme.spacing(8, 0, 2),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.h2,
  },
  img: {
    width: '25%',
    heigth:'25%',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(8)
  },
  title: {
    alignText: 'center',
    margin: theme.spacing(4, 0 ,2)
  }
});
class Register extends Component {
    state = {
      first_name: '',
      last_name: '',
      username:'',
      email: '',
      password: '',
    }
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
       e.preventDefault()
       
       const newUser = {
          ...this.state
       }
       this.props.onRegister(newUser)
       if(!this.props.errors) {
         this.props.history.push('/registration-completed')
       }
    }
      
    render() {
        const { classes } = this.props;
        let authRedirect = null
        if(this.props.registrationCompleted) {
          authRedirect = <Redirect to={"/registration-completed"} />
        }
        return (
            <Container maxWidth="sm">
              <div className={classes.paper}>
                <form onSubmit={this.onSubmit} style={useStyles.form}>
                <div id="img">
                <img src={logo} className={classes.img} alt="registerlogo"/>
              </div>
                <Typography variant="h4" color="initial" align="center" className={classes.title}>Crear una cuenta</Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                          <Typography variant="subtitle2" color="initial">Nombres:</Typography>
                        <TextField
                                id="first"
                                
                                value={this.props.first_name}
                                onChange={this.onChange}
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
                                error={Boolean(this.props.errors?.first_name)}
                                helperText={this.props.errors?.first_name ? this.props.errors?.first_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Apellidos:</Typography>
                        <TextField
                                id="last"
                                value={this.props.last_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="last_name"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                autoFocus
                                size="small"
                                placeholder="Ingrese su apellido"
                                error={Boolean(this.props.errors?.last_name)}
                                helperText={this.props.errors?.last_name ? this.props.errors?.last_name[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Usuario</Typography>
                        <TextField
                                id="user"
                                value={this.props.username}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="username"
                                name="username"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoFocus
                                size="small"
                                placeholder="Usuario"
                                error={Boolean(this.props.errors?.username)}
                                helperText={this.props.errors?.username ? this.props.errors?.username[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Correo Electronico:</Typography>
                              <TextField
                                id="email"
                                value={this.props.email}
                                onChange={this.onChange}
                                type="email"
                                htmlFor="email"
                                name="email"
                                fullWidth
                                variant="outlined"
                                placeholder="Ingrese su correo electronico"
                                required
                                autoComplete="true"
                                autoFocus
                                size="small"
                                error={Boolean(this.props.errors?.email)}
                                helperText={this.props.errors?.email ? this.props.errors?.email[0] : ""}
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Ingrese su contraseña:</Typography>
                        <TextField
                                    id="password"
                                    value={this.props.password}
                                    onChange={this.onChange}
                                    type="password"
                                    htmlFor="password"
                                    name="password"
                                    fullWidth
                                    variant="filled"
                                    required
                                    autoFocus
                                    placeholder="Ingrese su contraseña"
                                    size="small"
                                    error={Boolean(this.props.errors?.password)}
                                    helperText={this.props.errors?.password ? this.props.errors?.password[0] : ""}
                                    />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Confirme su contraseña</Typography>
                        <TextField
                                    id="confirm_password"
                                    
                                    onChange={this.onChange}
                                    type="password"
                                    htmlFor="password"
                                    name="confirm_password"
                                    fullWidth
                                    variant="filled"
                                    required
                                    autoFocus
                                    placeholder="Confirme su contraseña"
                                    size="small"
                                    error={Boolean(this.props.errors?._schema)}
                                    helperText={this.props.errors?._schema ? this.props.errors?._schema[0] : ""}
                                    />
                        </Grid>                                                                  
                    </Grid>
                    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
                </form>
              </div>
              {authRedirect}
                </Container>
        )
    }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
    password: state.user.password,
    confirm_password: state.user.confirm_password,
    username: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    errors: state.user.errors,
    registrationCompleted: state.user.registrationCompleted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user) => dispatch(actions.register(user))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(useStyles)(Register));
