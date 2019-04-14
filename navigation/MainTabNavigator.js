import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantDetailsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-pizza` : 'md-pizza'
      }
    />
  ),
};

const OrdersStack = createStackNavigator({
  Orders: OrdersScreen,
});

OrdersStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  OrdersStack,
  ProfileStack,
});
