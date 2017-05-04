import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MeetupApi } from '../../../constants/api';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {

  static defaultProps = {
      MeetupApi
  }

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {

  }

  render() {
    return (
      <View style={styles.root}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;
