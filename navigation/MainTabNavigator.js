import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddressScreen from '../screens/AddressScreen';
import BloodScreen from '../screens/BloodScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ShowProfileScreen from '../screens/ShowProfileScreen';
import EachHistoryScreen from '../screens/EachHistoryScreen';

const AddressStack = createStackNavigator({
  Address: AddressScreen,
});

AddressStack.navigationOptions = {
  tabBarLabel: 'Адрес',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-navigate${focused ? '' : '-outline'}` : 'md-navigate'}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#40E0D0"
  }
};

const BloodStack = createStackNavigator({
  Blood: BloodScreen,
});

BloodStack.navigationOptions = {
  tabBarLabel: 'Сдать кровь',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'md-heart'}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#40E0D0"
  }
};



const HistoryStack = createStackNavigator({
    History: HistoryScreen,
    EachHistory: EachHistoryScreen,
});

HistoryStack.navigationOptions = {
    tabBarLabel: 'История',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
        />
    ),
    tabBarOptions: {
      activeTintColor: "#40E0D0"
    }
};



const ProfileStack = createStackNavigator({
    ShowProfile: ShowProfileScreen,
    Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Мои данные',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
        />
    ),
    tabBarOptions: {
      activeTintColor: "#40E0D0"
    }
};



export default createBottomTabNavigator({
  AddressStack,
  BloodStack,
  HistoryStack,
  ProfileStack
});
