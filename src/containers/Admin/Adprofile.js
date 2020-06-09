import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

const useStyles = theme => ({
  paper: {
    //marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
  },
  cont: {
    maxHeight: '60vh'
  },
  button:{
    display: 'flex', 
    color: '',
  },
  centro: {
    minHeight:"95vh"
  }
})

class Profile extends Component {
  
  render(){
    const {classes} = this.props;
    return (
      <div container className={classes.cont}>
        <Grid container spacing={10} direction="row"
          alignItems="center"
          justify="center" className={classes.centro}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11}  >
            <Paper className={classes.paper} >            
                <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/monitor.svg")}
                      title="Administrar usuarios"
                      onClick={event =>  window.location.href='/Adusers'}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                    Administrar usuarios
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>            
            </Paper>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
            <Paper className={classes.paper}>
            <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="report"                    
                      image={require("../../img/prescription.svg")}
                      
                      title="Historias"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Administrar Examenes
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
            <Paper className={classes.paper}>
              <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/adminpil.svg")}
                      
                      title="Investigacion"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Admin Medicamentos
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
          </Grid>
        </Grid>
      </div>
    );
   }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(withStyles(useStyles)(Profile))