import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {connect} from "react-redux";

import ErrorSnackbar from '../components/ErrorSnackbar';
import {CLEAR_ERRORS, USER_LOGIN_START} from '../redux/actionTypes';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    state = {
        username: '',
        password: '',
    };

    _dismissError = () => {
        this.props.dispatch({ type: CLEAR_ERRORS });
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
        const user = this.props.user;
        if (user.IsLoggedIn) {
            this.props.navigation.navigate('Main');
        }
        if (!user.AuthInProgress && user.Error.length > 0) {

        }
    }

    render() {
        return (
            <>
                <View style={{flex: 4}}>
                    <View style={styles.formGroup}>
                        <TextInput
                            label='Username'
                            mode='outlined'
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                            label='Password'
                            mode='outlined'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={[styles.bottom, styles.button]}>
                        <Button
                            mode="contained"
                            loading={this.props.user.AuthInProgress}
                            disabled={this.props.user.AuthInProgress}
                            onPress={this._doLogin}>
                            Login
                        </Button>
                    </View>
                    <View style={[styles.bottom, styles.button]}>
                        <Button
                            disabled={this.props.user.AuthInProgress}
                            onPress={this._navigateToRegisterScreen}>
                            Create an account
                        </Button>
                    </View>
                    <View style={styles.bottom}>
                        <ErrorSnackbar
                            visible={(this.props.user.Error.error_description !== null)}
                            onDismiss={this._dismissError}
                            onPress={this._dismissError}
                            barText={this.props.user.Error.error_description}
                        />
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    formGroup: {
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
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