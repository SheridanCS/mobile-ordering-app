import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Divider, Headline, Subheading, TextInput} from "react-native-paper";
import {connect} from "react-redux";

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        const profile = this.props.user.Profile;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Avatar.Icon size={96} icon="person"/>
                    <Headline>{profile.username}</Headline>
                    <Subheading>{profile.id}</Subheading>
                    <Divider/>
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Name"
                        value={profile.name}
                        disabled={true}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Email"
                        value={profile.email}
                        disabled={true}
                    />
                </View>
                <Button icon="add-a-photo" mode="text" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 12,
    },
    formGroup: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 12,
    }
});

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);