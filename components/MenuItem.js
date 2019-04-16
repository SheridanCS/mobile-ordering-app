import React from 'react';
import {StyleSheet} from 'react-native';
import {List, Checkbox} from 'react-native-paper';
import ItemCustomization from '../components/ItemCustomization';

class MenuItem extends React.Component {
    state = {
        checked: false,
        customizations: [],
    };

    _addToOrder = () => {
        this.setState(
            (prevState) => ({ checked: !prevState.checked}),
            this._updateOrderItem
        );
    };

    _modifyCustomization = (item) => {
        if (this.state.customizations.indexOf(item) === -1) {
            this.setState(
                (prevState) => ({ customizations: [...prevState.customizations, item]}),
                this._updateOrderItem
            );
        } else {
            this.setState(
                (prevState) => ({ customizations: prevState.customizations.filter((id) => (id !== item))}),
                this._updateOrderItem
            );
        }
    };

    _updateOrderItem = () => {
        this.props.onItemUpdate({
            id: this.props.item.id,
            name: this.props.item.name,
            customizations: this.state.customizations,
            price: this.props.item.price,
            checked: this.state.checked,
        })
    };

    render() {
        const customizations = this.props.item.customizations.map((item, key) => (
            <ItemCustomization
                key={key}
                customization={item}
                checked={this.state.customizations.indexOf(item.name) > -1}
                onPress={this._modifyCustomization}
            />
        ));
        return (
            <List.Accordion
                title={this.props.item.name}
                description={'$' + this.props.item.price.toFixed(2)}
                onPress={this._addToOrder}
                expanded={this.state.checked}
                left={props => <Checkbox {...props} status={(this.state.checked ? 'checked' : 'unchecked')} />}
            >
                {customizations}
            </List.Accordion>
        );
    }
}

const styles = StyleSheet.create({});

export default MenuItem;