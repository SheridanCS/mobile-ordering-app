import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from "react-native";
import {Button, HelperText, TextInput} from "react-native-paper";
import {connect} from "react-redux";

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
    };

    state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        passwordLengthWarning: false,
        passwordMatchesWarning: false,
    };

    _changePasswordText = (password) => {
        this.setState({
            password,
            passwordLengthWarning: password.length < 8,
        });
    };

    _changeConfirmPasswordText = (confirmPassword) => {
        this.setState((prevState) => ({
            confirmPassword,
            passwordMatchesWarning: confirmPassword === prevState.password
        }));
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding'>
                <ScrollView>
                    <View style={styles.formGroup}>
                        <TextInput
                            label='Name'
                            mode='outlined'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                            label='Email'
                            mode='outlined'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
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
                            onChangeText={password => this._changePasswordText(password)}
                        />
                        <HelperText
                            type="error"
                            visible={this.state.passwordLengthWarning}>
                            Password too short
                        </HelperText>
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                            label='Confirm Password'
                            mode='outlined'
                            secureTextEntry={true}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this._changeConfirmPasswordText(confirmPassword)}
                        />
                        <HelperText
                            type="error"
                            visible={this.state.passwordMatchesWarning}>
                            Passwords do not match
                        </HelperText>
                    </View>
                    <View style={styles.formGroup}>
                        <Button mode="contained" onPress={() => console.log('Pressed')}>
                            Register
                        </Button>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    formGroup: {
        padding: 8,
        justifyContent: 'center',
    }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);