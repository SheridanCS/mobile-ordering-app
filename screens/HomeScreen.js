import React from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import {connect} from 'react-redux';

import {GET_RESTAURANTS_LIST} from '../redux/actionTypes';
import RestaurantCard from "../components/RestaurantCard";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        Refreshing: false,
        Restaurants: [],
        SearchQuery: '',
    };

    componentDidMount() {
        this._getRestaurantsList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.Refreshing) {
            this.setState({Refreshing: false});
        }
    }

    _filterRestaurants = (query) => {
        this.setState({SearchQuery: query});
    };

    _renderRestaurantCard = (restaurant) => (
        <RestaurantCard restaurant={restaurant}/>
    );

    _getRestaurantsList = () => {
        this.setState({Refreshing: true});
        this.props.dispatch({type: GET_RESTAURANTS_LIST});
    };

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
                    renderItem={this._renderRestaurantCard}
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