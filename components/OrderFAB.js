import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB, Portal} from 'react-native-paper';

export default class OrderFAB extends React.Component {
    state = {
        open: false,
    };

    render() {
        return (
            <Portal>
                <FAB.Group
                    style={styles.fab}
                    open={this.state.open}
                    icon={this.state.open ? 'clear' : 'add'}
                    actions={[
                        { icon: 'add-shopping-cart', label: 'Update order', onPress: this.props.onPress },
                    ]}
                    onStateChange={({ open }) => this.setState({ open })}
                    onPress={() => {}}
                />
            </Portal>
        );
    }
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        paddingBottom: 48,
    }
});