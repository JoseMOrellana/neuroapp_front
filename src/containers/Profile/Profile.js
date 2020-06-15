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
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
  },
  cont: {
    position: 'center',
    marginTop: '10%',
    marginLeft: '8%',
    minHeight: '90vh'
  }
})

class Profile extends Component {
  
  render(){
    const {classes} = this.props;
    return (
      <div container className="cont">
        <Grid container spacing={10} justify="center">
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11}  >
            <Paper className={classes.paper} >            
                <Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/clinic.png")}
                      
                      title="Citas"
                      onClick={event =>  window.location.href='/pacientform'}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Nuevo Paciente
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
                      image={require("../../img/report.png")}
                      
                      title="Historias"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Historias
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
                      image={require("../../img/dna.png")}
                      
                      title="Investigacion"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Investigacion
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
                      image={require("../../img/qualification.png")}
                      
                      title="Examenes"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Examenes
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Paper>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
            <Paper className={classes.paper}><Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/pills.png")}
                      title="Citas"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Medicamentos
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
                </Paper>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
            <Paper className={classes.paper}><Card>
                  <CardActionArea className={classes.card}>
                    <CardMedia
                      className="ccalendari"
                      component="img"
                      alt="Citas"                    
                      image={require("../../img/newspaper.png")}
                      title="Citas"
                      onClick={this.routeChange}          
                    />
                    <CardActions>
                    <Button color="secondary" variant="contained" fullWidth>
                      Citas
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