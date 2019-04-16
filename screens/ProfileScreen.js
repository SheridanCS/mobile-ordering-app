import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Divider, Headline, Subheading, TextInput} from "react-native-paper";
import {connect} from "react-redux";
import {USER_LOGOUT_START} from "../redux/actionTypes";

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    _doLogout = () => {
        this.props.dispatch({ type: USER_LOGOUT_START });
        this.props.navigation.navigate('Login');
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (Object.keys(nextProps.user.Profile).length > 0);
    }

    render() {
        const profile = this.props.user.Profile;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Avatar.Icon size={96} icon="person"/>
                    <Headline>{profile.username}</Headline>
                    <Subheading>{profile.id}</Subheading>
                    <Divider/>
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Name"
                        value={profile.name}
                        disabled={true}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Email"
                        value={profile.email}
                        disabled={true}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Button icon="exit-to-app" mode="text" onPress={this._doLogout}>
                        Logout
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 12,
    },
    formGroup: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 12,
    }
});

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);