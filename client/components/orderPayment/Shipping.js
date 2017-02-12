import React       from 'react';

import {validation} from '../../common';

class Shipping extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.shipping
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
            this.props.addShipping(this.state);
            this.context.router.push('/billing');
        }

    }

    render(){

        return (
            <div className="app-shipping">
                <div className="order-step">
                    <ul className="order-step__list">
                        <li><span className="order-step__item is-active">Shipping</span></li>
                        <li><span className="order-step__item">Billing</span></li>
                        <li><span className="order-step__item">Payment</span></li>
                    </ul>
                </div>
                <h3 className="form-title">Shipping Info</h3>
                <div className="form-group">
                   <h4 className="form-group__title">Recipient</h4>
                    <div className="form-group__input">
                        <input type="text" className="input-item" placeholder="Full Name"
                               ref="fullName"
                               value={this.state.fullName}
                               onChange={(e) => this.valueChange(e, 'fullName')} />
                    </div>
                    <div className="form-group__input form-group__input--flexbox">
                        <input type="text" className="input-item input-item--short" placeholder="Daytime Phone"
                               ref="phone"
                               value={this.state.phone}
                               onChange={(e) => this.valueChange(e, 'phone')} />
                        <div className="input-desc">
                            <span className="input-desc__inner">For delivery <br /> questions only</span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <h4 className="form-group__title">Address</h4>
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

Shipping.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Shipping;

