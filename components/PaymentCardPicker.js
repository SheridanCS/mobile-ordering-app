import React from 'react';
import {Picker} from 'react-native';

class PaymentCardPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onPaymentChange = (itemValue, itemIndex) => {
        console.log(itemValue, itemIndex);
    };

    render() {
        const pickerItems = this.props.payment.map(th => (
            <Picker.Item
                key={th}
                label={`${th.Type} ${th.Number} ${th.Expiry}`}
                value={th} />
        ));
        return (
            <Picker
                selectedValue={this.state.language}
                onValueChange={this._onPaymentChange}
            >
                {pickerItems}
            </Picker>
        );
    }
}

export default PaymentCardPicker;