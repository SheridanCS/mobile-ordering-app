import React from 'react';
import {Icon} from 'expo';
import {View, StyleSheet, Text} from 'react-native';
import {Badge} from 'react-native-paper';
import {connect} from "react-redux";
import Colors from '../constants/Colors';

class BadgeTabBarIcon extends React.Component {
  render() {
    let orderItems = 0;
    if (this.props.orders.InProgress.items) orderItems = Object.keys(this.props.orders.InProgress.items).length;
    const badge = (orderItems > 0) ? <Badge style={styles.badge}>{orderItems}</Badge> : <Text></Text>;
    return (
      <View>
        <Icon.Ionicons
          name={this.props.name}
          size={26}
          style={styles.icon}
          color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        {badge}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    margin: 5
  },
  badge: {
    position: 'absolute',
    right: -8,
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgeTabBarIcon);