import React from 'react';
import {Paragraph} from 'react-native-paper';

const ItemSummary = (props) => {
    const itemName = props.item.name;
    let itemCustomizations = '';
    if (props.item.customizations.length > 0) {
        itemCustomizations = '(' + props.item.customizations.join(', ') + ')';
    }
    return (
        <Paragraph>{`${itemName} ${itemCustomizations}`}</Paragraph>
    );
};

export default ItemSummary;