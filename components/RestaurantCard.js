import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, Paragraph, Text, Title} from 'react-native-paper';

class RestaurantCard extends React.Component {
    _logo = "https://grub2go.herokuapp.com/api/files/" + this.props.restaurant.item.logo;

    componentDidMount() {
        console.log(this._logo);
    }

    render() {
        return (
            <Card>
                <Card.Title
                    title={this.props.restaurant.item.name}
                    left={() => (
                        <Image style={styles.logo} source={{ uri: this._logo }} />
                    )}
                />
                <Card.Content>
                    {this.props.restaurant.item.addresses.map((address) => (
                        <Paragraph>
                            <Text>{address.street}, {address.city}, {address.province}</Text>
                        </Paragraph>
                    ))}
                </Card.Content>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 48,
        width: 48,
    }
});

export default RestaurantCard;