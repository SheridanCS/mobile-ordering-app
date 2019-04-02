import {createStackNavigator} from "react-navigation";

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen
    },
    {
        initialRouteName: 'Login'
    }
);

AuthStack.navigationOptions = {};

export default AuthStack;