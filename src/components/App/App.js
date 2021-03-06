import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
import Home from '../Home/Home';
import CreateNewSystem from '../CreateNewSystem/CreateNewSystem';
import ChooseSource from '../ChooseComponents/ChooseSource';
import ChooseAmplification from '../ChooseComponents/ChooseAmplification';
import ChooseSpeakers from '../ChooseComponents/ChooseSpeakers';
import ChooseCables from '../ChooseComponents/ChooseCables';
import ChooseAccessories from '../ChooseComponents/ChooseAccessories';
import SelectCategory from '../SelectCategory/SelectCategory';
import InsertCustom from '../InsertCustom/InsertCustom';
import ExistingSystems from '../ExistingSystems/ExistingSystems';
import SystemDetails from '../SystemDetails/SystemDetails';
import ExistingSystemDetails from '../ExistingSystemDetails/ExistingSystemDetails';
import AdminPage from '../AdminPage/AdminPage';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/create"
              component={CreateNewSystem}
            />
            <Route
              exact
              path="/choosesource"
              component={ChooseSource}
            />
            <Route
              exact
              path="/chooseamplification"
              component={ChooseAmplification}
            />
            <Route
              exact
              path="/choosespeakers"
              component={ChooseSpeakers}
            />
            <Route
              exact
              path="/choosecables"
              component={ChooseCables}
            />
            <Route
              exact
              path="/chooseaccessories"
              component={ChooseAccessories}
            />
            <Route
              exact
              path="/select"
              component={SelectCategory}
            />
            <Route
              exact
              path="/insert"
              component={InsertCustom}
            />
            <Route
              exact
              path="/existing"
              component={ExistingSystems}
            />
            <Route
              exact
              path="/existingsystemdetails"
              component={ExistingSystemDetails}
            />
            <Route
              exact
              path="/details"
              component={SystemDetails}
            />
            <Route
              exact
              path="/admin"
              component={AdminPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={Home}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
