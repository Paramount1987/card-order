import React       from 'react';

import {validation} from '../../common';

class Billing extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.billing
        };
    }

    copyClicked(e) {
        e.preventDefault();
        for(let key in this.state){
            if(this.props.shipping.hasOwnProperty(key)){
                this.setState({ [key]: this.props.shipping[key] });
                this.refs[key].classList.remove('empty');
            }
        }
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
            this.props.addBilling(this.state);
            this.context.router.push('/payment');
        }
    }

    render(){

        return (
            <div className="app-billing">
                <div className="order-step">
                    <ul className="order-step__list">
                        <li><span className="order-step__item done">Shipping</span></li>
                        <li><span className="order-step__item is-active">Billing</span></li>
                        <li><span className="order-step__item">Payment</span></li>
                    </ul>
                </div>
                <div className="flexbox-title">
                    <h3 className="form-title">Billing Information</h3>
                    <a href="#" className="billing-link" onClick={(e) => this.copyClicked(e)}><span>Same as shipping</span></a>
                </div>
                <div className="form-group">
                        <h4 className="form-group__title">Billing Contact</h4>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Full Name"
                               ref="fullName"
                               value={this.state.fullName}
                               onChange={(e) => this.valueChange(e, 'fullName')} />
                    </div>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Email Address"
                               ref="email"
                               value={this.state.email}
                               onChange={(e) => this.valueChange(e, 'email')} />
                    </div>
                </div>
                <div className="form-group">
                    <h4 className="form-group__title">Billing Address</h4>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Street Address"
                               ref="street"
                               value={this.state.street}
                               onChange={(e) => this.valueChange(e, 'street')} />
                    </div>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
                               ref="building"
                               value={this.state.building}
                               onChange={(e) => this.valueChange(e, 'building')} />
                    </div>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="City"
                               ref="city"
                               value={this.state.city}
                               onChange={(e) => this.valueChange(e, 'city')} />
                    </div>
                    <div className="form-group__input form-group__input--flexbox">
                        <input type="text" className="input-item input-item--short" placeholder="Country"
                               ref="country"
                               value={this.state.country}
                               onChange={(e) => this.valueChange(e, 'country')} />
                        <input type="text" className="input-item input-item--shorter" placeholder="ZIP"
                               ref="zip"
                               value={this.state.zip}
                               onChange={(e) => this.valueChange(e, 'zip')} />
                    </div>
                </div>

                <button type="button" className="form-btn" onClick={() => this.sendValues()}>Continue</button>
            </div>
        )
    }
}

Billing.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Billing;