import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, List, Text} from 'react-native-paper';
import ItemSummary from "./ItemSummary";

const OrderCard = (props) => {
    let total = 0;
    const actions = (props.beginCheckout && props.clearOrder)
        ? (
            <Card.Actions>
                <Button onPress={props.clearOrder}>Clear</Button>
                <Button onPress={props.beginCheckout}>Checkout</Button>
            </Card.Actions>
        ) : <Text/>;

    for (let key in props.items) {
        total += props.items[key].price;
    }
    const summaries = Object.keys(props.items).map((item, key) => <ItemSummary key={key} item={props.items[item]} />);
    return (
        <List.Section>
            <List.Subheader>{(typeof props.date === undefined) ? "Current Order" : props.date}</List.Subheader>
            <Card>
                <Card.Title title={props.name} subtitle={'$' + total.toFixed(2)} />
                <Card.Content>
                    {summaries}
                </Card.Content>
                {actions}
            </Card>
        </List.Section>
    );
};

OrderCard.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    date: PropTypes.string,
    clearOrder: PropTypes.func,
    beginCheckout: PropTypes.func
};

export default OrderCard;