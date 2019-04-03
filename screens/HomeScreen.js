import React from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import {connect} from 'react-redux';

import {GET_RESTAURANTS_LIST} from '../redux/actionTypes';
import RestaurantItem from '../components/RestaurantItem';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        Refreshing: false,
        Restaurants: [],
        SearchQuery: '',
    };

    _filterRestaurants = (query) => {
        this.setState({SearchQuery: query});
    };

    _showRestaurantDetails = (restaurant) => {
        this.props.navigation.navigate('Restaurant', restaurant);
    };

    _renderRestaurantItem = (restaurant) => (
        <RestaurantItem
            id={restaurant.item.id}
            restaurant={restaurant}
            onPress={this._showRestaurantDetails}
        />
    );

    _getRestaurantsList = () => {
        this.setState({Refreshing: true});
        this.props.dispatch({type: GET_RESTAURANTS_LIST});
    };

    componentDidMount() {
        this._getRestaurantsList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.Refreshing) {
            this.setState({Refreshing: false});
        }
    }

    render() {
        return (
            <>
                <Searchbar
                    placeholder={"Search"}
                    onChangeText={this._filterRestaurants}
                    value={this.state.SearchQuery}
                />
                <FlatList
                    data={this.props.restaurants.Restaurants}
                    renderItem={this._renderRestaurantItem}
                    onRefresh={this._getRestaurantsList}
                    refreshing={this.state.Refreshing}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
    restaurants: state.restaurants,
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);