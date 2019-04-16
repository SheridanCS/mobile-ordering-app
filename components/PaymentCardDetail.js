import React from 'react';
import {Text} from 'react-native-paper';
import PropType from 'prop-types';

const PaymentCardDetail = (props) => (
    <Text>{props.payment.Type} {props.payment.Number} {props.payment.Expiry}</Text>
);

PaymentCardDetail.propTypes = {
    payment: PropType.object.isRequired
};

export default PaymentCardDetail;