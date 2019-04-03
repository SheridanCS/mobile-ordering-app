import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Surface, TextInput} from "react-native-paper";
import {connect} from "react-redux";

import {APP_LOADED, USER_LOGIN_START} from '../redux/actionTypes';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    state = {
        loggingIn: false,
        username: '',
        password: '',
    };

    _doLogin = () => {
        this.setState((prevState) => ({ loggingIn: !prevState.loggingIn}));
        this.props.dispatch({
            type: USER_LOGIN_START,
            payload: {
                username: this.state.username,
                password: this.state.password,
            }
        });
    };

    _navigateToRegisterScreen = () => {
        this.props.navigation.navigate('Register');
    };

    componentDidUpdate() {
        if (this.props.user.IsLoggedIn) {
            this.props.navigation.navigate('Main');
        }
    }

    render() {
        return (
            <>
                <View style={styles.formGroup}>
                    <TextInput
                        label='Username'
                        mode='outlined'
                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}
                    />
                </View>
                <Surface style={styles.formGroup}>
                    <TextInput
                        label='Password'
                        mode='outlined'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </Surface>
                <Surface style={styles.formGroup}>
                    <Button
                        mode="contained"
                        loading={this.state.loggingIn}
                        disabled={this.state.loggingIn}
                        onPress={this._doLogin}>
                        Login
                    </Button>
                </Surface>
                <Surface style={styles.formGroup}>
                    <Button
                        disabled={this.state.loggingIn}
                        onPress={this._navigateToRegisterScreen}>
                        Create an account
                    </Button>
                </Surface>
            </>
        );
    }
}

const styles = StyleSheet.create({
    formGroup: {
        padding: 8,
        justifyContent: 'center',
    }
});

const mapStateToProps = state => ({
    user: state.user
});
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);