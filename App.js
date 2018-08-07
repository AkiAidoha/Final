import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';

console.disableYellowBox = true;


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontLoaded: false
  };


  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.props.navigation.navigate(user ? 'Main' : 'Login')
  //   })
  // }

  render() {

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/32-649_4.jpg'),
        require('./assets/images/hospital.svg'),
        require('./assets/images/user.svg'),
        require('./assets/images/padlock.svg'),
        require('./assets/images/calendar.svg'),
        require('./assets/images/height.svg'),
        require('./assets/images/weighing.svg'),
        require('./assets/images/enterprise.svg'),
        require('./assets/images/tint-drop.svg'),
        require('./assets/images/transfusion.svg'),
        require('./assets/images/beer.svg'),
        require('./assets/images/peanut.svg'),
        require('./assets/images/sunflower.svg'),
        require('./assets/images/butter.svg'),
        require('./assets/images/mayonnaise.svg'),
        require('./assets/images/can.svg'),
        require('./assets/images/gender.svg'),
        require('./assets/images/edit.svg'),
        require('./assets/images/profile.svg'),
        require('./assets/images/enterpriseBlack.svg'),
        require('./assets/images/calendarBlack.svg'),
        require('./assets/images/genderBlack.svg'),
        require('./assets/images/heightBlack.svg'),
        require('./assets/images/weightBlack.svg'),
        
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
