import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

class RestaurantItem extends React.Component {
    constructor(props) {
        super(props);
        this._logo = "https://grub2go.herokuapp.com/api/files/" + props.restaurant.item.logo;
    }

    render() {
        return (
            <List.Item
                title={this.props.restaurant.item.name}
                description={JSON.stringify(this.props.restaurant.item.addresses)}
                left={() => (<Image style={styles.logo} source={{ uri: this._logo }} />)}
                onPress={() => (this.props.onPress(this.props.restaurant.item))}
            />
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 48,
        width: 48,
    }
});

export default RestaurantItem;