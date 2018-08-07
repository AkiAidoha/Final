import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'Новости',
    headerStyle: {
      backgroundColor: '#40E0D0',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      // fontFamily: 'Avenir Next',
      fontWeight: '500'
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
