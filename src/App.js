/*import Test from './components/Navigation/Navbar/Test'*/
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'


import MenuAppBar from './components/Navigation/Navbar/Navbar'

import Landing from './containers/Landing/Landing'
import Login from './containers/Auth/Login/Login'
import Logout from './containers/Auth/Logout'
import Register from './containers/Auth/Register/Register'
import PostRegister from './containers/Auth/Register/PostRegister'
import Profile from './containers/Profile/Profile'
import PacientForm from './containers/PacientForm/PacientForm'
import Adprofile from './containers/Admin/Adprofile'
import Adusers from './containers/Admin/Adusers'
import Adexams from './containers/Admin/Adexams'
import Adant from './containers/Admin/Adant'
import Admedicamentos from './containers/Admin/Admedicamentos'
import Adalergies from './containers/Admin/Adalergies'
import Adnews from './containers/Admin/Adnews'
import Examsview from './containers/User/Examsview'
import Histories from './containers/User/Histories'
import Patientsview from './containers/User/Patientsview'
import Patientview from './containers/User/Patientview'
import Medsview from './containers/User/Medsview'
import Investigation from './containers/User/Investigation'

import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    if( userId && !this.props.userId) {
      const token = localStorage.getItem('accessToken')
      this.props.retrieveUserInfo(token, userId)
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          {/*<Navbar /> */}
          <MenuAppBar isAuthenticated={this.props.isAuthenticated}/>
          <Route exact path="/" component={Landing} />
          <Container maxWidth='lg'>
            <Route exact path="/register" component={Register} />
            <Route exact path="/registration-completed" component={PostRegister} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/pacientform" component={PacientForm}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/Adprofile" component={Adprofile} />
            <Route exact path="/Adexams" component={Adexams} />
            <Route exact path="/Adusers" component={Adusers} />
            <Route exact path="/Adant" component={Adant}/>
            <Route exact path="/Admedicamentos" component={Admedicamentos}/>
            <Route exact path="/Adalergies" component ={Adalergies}/>            
            <Route exact path="/Adnews" component ={Adnews}/>
            {/*<Route exact path="/Test" component ={Test}/>*/}
            <Route exact path="/Examsview" component ={Examsview}/>
            <Route exact path="/Patientsview" component ={Patientsview}/>
            <Route exact path="/Patientview/:id" component ={Patientview}/>
            <Route exact path="/Histories" component ={Histories}/>
            <Route exact path="/Medsview" component ={Medsview}/>
            <Route exact path="/Investigation" component ={Investigation}/>
          </Container>
        </div>

      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveUserInfo: (token, userId) => dispatch(actions.retrieveUserInfo(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)