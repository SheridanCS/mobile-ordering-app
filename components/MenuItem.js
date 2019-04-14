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
        this.setState((prevState) => ({ checked: !prevState.checked}));
    };

    _modifyCustomization = (item) => {
        if (this.state.customizations.indexOf(item) === -1) {
            this.setState((prevState) => ({ customizations: [...prevState.customizations, item]}));
        } else {
            this.setState((prevState) => ({ customizations: prevState.customizations.filter((id) => (id !== item))}));
        }
    };

    render() {
        const customizations = this.props.item.customizations.map((item, key) => (
            <ItemCustomization
                key={key}
                customization={item}
                checked={this.state.customizations.indexOf(item.id) > -1}
                onPress={this._modifyCustomization}
            />
        ));
        return (
            <List.Accordion
                title={this.props.item.name}
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