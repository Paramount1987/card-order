import React       from 'react';

import {validation} from '../../common';

class Payment extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.payment
        };
    }

    valueChange(e, field){
        this.stateChange(field, e.target.value);
        this.refs[field].classList.remove('empty');
    }

    stateChange(field, value){
        this.setState({[field]: value});
    }

    sendValues(){
        if(validation(this.refs)){
            this.props.addPayment(this.state);
            this.context.router.push('/success');
        }
    }

    render(){

        return (
            <div className="app-payment">
                <div className="order-step">
                    <ul className="order-step__list">
                        <li><span className="order-step__item done">Shipping</span></li>
                        <li><span className="order-step__item done">Billing</span></li>
                        <li><span className="order-step__item is-active">Payment</span></li>
                    </ul>
                </div>
                <h3 className="form-title form-title--sm">Payment</h3>
                <p className="form-text form-text--sm"><span className="i-secure"></span>This is a secure 128-bit SSL encrypted payment</p>
                <div className="form-group form-group--sm">
                    <h4 className="form-group__title">Cardholder Name</h4>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Name as it appears on your card"
                               ref="fullName"
                               value={this.state.fullName}
                               onChange={(e) => this.valueChange(e, 'fullName')} />
                    </div>
                </div>
                <div className="form-group form-group--sm">
                    <h4 className="form-group__title">Card Number</h4>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="XXXX XXXX XXXX XXXX XXXX"
                               ref="cardNumber"
                               value={this.state.cardNumber}
                               onChange={(e) => this.valueChange(e, 'cardNumber')} />
                    </div>
                </div>

                <div className="form-group__flexbox">
                    <div className="form-group">
                        <h4 className="form-group__title">Expire Date</h4>
                        <div className="form-group__input">
                            <input type="text" className="input-item" placeholder="MM / YY"
                                   ref="expireDate"
                                   value={this.state.expireDate}
                                   onChange={(e) => this.valueChange(e, 'expireDate')} />
                        </div>
                    </div>

                    <div className="form-group">
                        <h4 className="form-group__title">Security Code</h4>
                        <div className="form-group__input">
                            <input type="text" className="input-item"
                                   ref="securityCode"
                                   value={this.state.securityCode}
                                   onChange={(e) => this.valueChange(e, 'securityCode')} />
                        </div>
                    </div>
                </div>

                <button type="button" className="form-btn" onClick={() => this.sendValues()}>Pay Securely</button>
            </div>
        )
    }
}

Payment.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Payment;