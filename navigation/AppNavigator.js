import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RegistrationScreen from "../Auth/RegistrationScreen";
import LoginScreen from '../Auth/LoginScreen';
import ForgotPasswordScreen from '../Auth/ForgotPasswordScreen';

export default createSwitchNavigator({
    Login: LoginScreen,
    Registration: RegistrationScreen,
    Main: MainTabNavigator,
    Forgot:ForgotPasswordScreen,
});