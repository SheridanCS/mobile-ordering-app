import React from 'react';
import {Picker, ScrollView, StyleSheet} from "react-native";
import {Button} from "react-native-paper";
import {connect} from "react-redux";
import {NavigationActions} from "react-navigation";
import OrderCard from "../components/OrderCard";
import PaymentCardPicker from "../components/PaymentCardPicker"
;
import {CLEAR_CURRENT_ORDER, UPDATE_PAST_ORDERS} from "../redux/actionTypes";
class CheckoutScreen extends React.Component {
    static navigationOptions = {
        title: 'Checkout'
    };

    _confirmOrder = () => {
        this.props.dispatch({
            type: UPDATE_PAST_ORDERS,
            payload: this.props.order
        });
        this.props.dispatch({ type: CLEAR_CURRENT_ORDER });
        this.props.navigation.dispatch(NavigationActions.back());
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (Object.keys(nextProps.order).length > 0);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <OrderCard
                    name={this.props.order.name}
                    items={this.props.order.items}
                    date={this.props.order.date}
                />
                <PaymentCardPicker payment={this.props.user.Payment}/>
                <Button icon="payment" mode="contained" onPress={this._confirmOrder}>
                    Confirm
                </Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    }
});

const mapStateToProps = state => ({
    order: state.orders.InProgress,
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);