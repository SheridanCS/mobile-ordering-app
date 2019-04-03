import React from 'react';
import {AsyncStorage, StatusBar, View,} from 'react-native';
import {ActivityIndicator} from "react-native-paper";
import {APP_LOADED} from "../redux/actionTypes";
import {connect} from "react-redux";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        this.props.dispatch({ type: APP_LOADED });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.navigation.navigate(
            (this.props.user.Auth.access_token !== null) ? 'Main' : 'Auth'
        );
    }

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);