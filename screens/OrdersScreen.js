import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Orders',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Orders Screen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});