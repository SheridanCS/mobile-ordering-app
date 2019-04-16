import {CLEAR_CURRENT_ORDER, UPDATE_CURRENT_ORDER, UPDATE_PAST_ORDERS} from "../actionTypes";

const initialState = {
    InProgress: {
        date: "Tue Apr 16 14:33:09 2019",
        id: 3,
        items: {
            15: {
                checked: true,
                customizations: [],
                id: 15,
                name: "Poutine",
                price: 3.5,
            },
            18: {
                checked: true,
                customizations: ["Sprite"],
                id: 18,
                name: "Soft Drink",
                price: 1,
            },
            9: {
                checked: true,
                customizations: ["Lettuce", "Tomato", "Pickles", "Hot Peppers", "Ketchup", "Mayo", "Cheese", "Bacon"],
                id: 9,
                name: "Angus Burger",
                price: 5.5,
            },
        },
        name: "Harvey's",
    },
    Past: [
        {
            id: 1,
            items: {
                1: {
                    checked: true,
                    customizations: ["Lettuce","Tomato","Pickles", "Ketchup","Mayo"],
                    id: 1,
                    name: "Whopper",
                    price: 5.5
                },
            },
            name: "Burger King",
            date: "Mon Apr 15 13:32:00 2019",
        },
        {
            id: 5,
            items: {
                12: {
                    checked: true,
                    customizations: ["Lettuce", "Tomato", "Hot Sauce"],
                    id: 12,
                    name: "Chicken Shawarma",
                    price: 8.5,
                },
                15: {
                    checked: true,
                    customizations: [],
                    id: 15,
                    name: "Poutine",
                    price: 3.5,
                },
                18: {
                    checked: true,
                    customizations: ["7up"],
                    id: 18,
                    name: "Soft Drink",
                    price: 1,
                },
            },
            name: "Taza Xpress",
            date: "Sun Apr 14 16:49:00 2019",
        },
        {
            id: 1,
            items: {
                1: {
                    checked: true,
                    customizations: ["Lettuce","Tomato","Pickles", "Ketchup","Mayo"],
                    id: 1,
                    name: "Whopper",
                    price: 5.5
                },
            },
            name: "Burger King",
            date: "Sat Apr 13 9:24:00 2019",
        }
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CLEAR_CURRENT_ORDER:
            return {
                ...state,
                InProgress: {}
            };
        case UPDATE_CURRENT_ORDER:
            return {
                ...state,
                InProgress: action.payload,
            };
        case UPDATE_PAST_ORDERS:
            return {
                ...state,
                Past: [
                    action.payload,
                    ...state.Past
                ]
            };
        default:
            return state;
    }
}