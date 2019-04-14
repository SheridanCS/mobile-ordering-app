import React from 'react';
import {StyleSheet} from 'react-native';
import {Checkbox, List} from 'react-native-paper';

class ItemCustomization extends React.Component {
    constructor(props) {
        super(props);
    }

    _toggleChecked = () => {
        this.props.onPress(this.props.customization.id);
    };

    render() {
        return (
            <List.Item
                style={styles.indent}
                title={this.props.customization.name}
                onPress={this._toggleChecked}
                left={props => <Checkbox {...props} status={this.props.checked ? 'checked' : 'unchecked'}/>}
            />
        );
    }
}

const styles = StyleSheet.create({
    indent: {
        marginLeft: 30,
    }
});

export default ItemCustomization;