import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import MenuItem from "./MenuItem";

export default class FoodMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.menu.map((item, key) => <MenuItem key={key} item={item} onItemUpdate={this.props.onItemUpdate} />);
        return <List.Section>{items}</List.Section>;
    }
}

const styles = StyleSheet.create({});