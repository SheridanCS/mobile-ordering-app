import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import PropTypes from 'prop-types';

class ErrorSnackbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Snackbar
                    visible={this.props.visible}
                    onDismiss={this.props.onDismiss}
                    action={{
                        label: 'Dismiss',
                        onPress: this.props.onPress,
                    }}>
                    {this.props.barText}
                </Snackbar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

ErrorSnackbar.propTypes = {
    visible: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
    barText: PropTypes.string,
};

export default ErrorSnackbar;