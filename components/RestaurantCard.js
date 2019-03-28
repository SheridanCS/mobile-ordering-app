import React from 'react';
import {Card, Paragraph, Text, Title} from 'react-native-paper';

const RestaurantCard = (props) => (
    <Card>
        <Card.Content>
            <Title>{props.restaurant.item.name}</Title>
            {props.restaurant.item.addresses.map((address, key) => (
                <Paragraph key={key}>
                    <Text>{address.street}</Text>
                    <Text>{address.city}</Text>
                    <Text>{address.province}</Text>
                    <Text>{address.postalCode}</Text>
                    <Text>{address.country}</Text>
                </Paragraph>
            ))}
        </Card.Content>
    </Card>
);

export default RestaurantCard;