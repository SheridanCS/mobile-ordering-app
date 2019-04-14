import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Divider, Headline, Subheading, Text} from 'react-native-paper';
import {connect} from "react-redux";
import {FILES_ENDPOINT} from "../constants/Api";
import FoodMenu from '../components/FoodMenu';

class RestaurantDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });

    constructor(props) {
        super(props);
    }

    render() {
        const detail = this.props.navigation.state.params;
        const logo = FILES_ENDPOINT + detail.logo;
        return (
            <>
                <View style={styles.header}>
                    <Avatar.Image size={96} source={{uri: logo}} theme={{colors: {background: '#fff'}}}/>
                    <Subheading>{detail.address.street}, {detail.address.city}, {detail.address.province}</Subheading>
                </View>
                <Divider/>
                <ScrollView>
                    <View style={styles.content}>
                        <FoodMenu menu={detail.items} />
                    </View>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    content: {
        padding: 12,
    }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailScreen);