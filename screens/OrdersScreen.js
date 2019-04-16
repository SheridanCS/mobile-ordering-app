import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Divider} from "react-native-paper";
import {connect} from "react-redux";
import OrderCard from "../components/OrderCard";
import {CLEAR_CURRENT_ORDER} from "../redux/actionTypes";

class OrdersScreen extends React.Component {
    static navigationOptions = {
        title: 'Orders',
    };

    _clearOrder = () => {
        this.props.dispatch({type: CLEAR_CURRENT_ORDER})
    };

    _beginCheckout = () => {
        this.props.navigation.navigate('Checkout');
    };

    render() {
        const {orders} = this.props;
        const currentOrder = (Object.keys(orders.InProgress).length > 0)
            ? (
                <OrderCard
                    name={orders.InProgress.name}
                    items={orders.InProgress.items}
                    date={new Date().toLocaleString()}
                    clearOrder={this._clearOrder}
                    beginCheckout={this._beginCheckout}
                />
            ) : <Text/>;
        const pastOrders = orders.Past.map((item, key) => (
            <OrderCard
                key={key}
                name={item.name}
                items={item.items}
                date={item.date}/>
        ));
        return (
            <ScrollView style={styles.container}>
                {currentOrder}
                {pastOrders}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersScreen);