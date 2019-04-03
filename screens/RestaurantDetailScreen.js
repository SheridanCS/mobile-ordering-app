import React from 'react';
import {StyleSheet} from "react-native";
import {Text} from 'react-native-paper';
import {connect} from "react-redux";

class RestaurantDetailScreen extends React.Component {
    render() {
        return (
            <Text>{JSON.stringify(this.props)}</Text>
        );
    }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailScreen);