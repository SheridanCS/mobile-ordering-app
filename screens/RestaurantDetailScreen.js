import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Divider, Headline, Subheading, Text} from 'react-native-paper';
import {connect} from "react-redux";
import {FILES_ENDPOINT} from "../constants/Api";
import FoodMenu from '../components/FoodMenu';
import OrderFAB from "../components/OrderFAB";
import {UPDATE_CURRENT_ORDER} from "../redux/actionTypes";

class RestaurantDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });

    state = {
        items: {},
    };

    _onItemUpdated = (item) => {
        const id = item.id;
        let items = this.state.items;
        if (item.checked) {
            items[id] = item;
        } else {
            delete items[id];
        }
        this.setState({ items });
    };

    _updateOrder = () => {
        const detail = this.props.navigation.state.params;
        const order = {
            id: detail.id,
            date: new Date().toLocaleString(),
            name: detail.name,
            items: this.state.items,
        };
        this.props.dispatch({ type: UPDATE_CURRENT_ORDER, payload: order });
    };

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
                        <FoodMenu
                            menu={detail.items}
                            onItemUpdate={this._onItemUpdated}
                        />
                    </View>
                    <OrderFAB onPress={this._updateOrder}/>
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

const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailScreen);