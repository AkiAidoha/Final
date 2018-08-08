import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RegistrationScreen from "../Auth/RegistrationScreen";
import LoginScreen from '../Auth/LoginScreen';

export default createSwitchNavigator({
    Main: MainTabNavigator,
    Login: LoginScreen,
    Registration: RegistrationScreen,
});