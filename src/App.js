import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import SignupPage from './components/pages/SignupPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import DrinksPage from './components/pages/DrinksPage';
import DrinkPage from './components/pages/DrinkPage';
import NewDrinkPage from './components/pages/NewDrinkPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import './App.css';

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <GuestRoute
      location={location}
      path="/forgot-password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/reset-password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <UserRoute
      location={location}
      path="/drinks"
      exact
      component={DrinksPage}
    />
    <UserRoute
      location={location}
      path="/drinks/:id"
      exact
      component={DrinkPage}
    />
    <UserRoute
      location={location}
      path="/drinks/new"
      exact
      component={NewDrinkPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
