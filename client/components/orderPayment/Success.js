import React       from 'react';

class Success extends React.Component{

    render(){

        return (
            <div className="app-success">
                <h3 className="form-title">Thank you for your order!</h3>
                <p className="text-order"><b>Order number is: 188787788</b></p>
                <p>
                    Your will recieve an email confirmation <br /> shortly to <span className="success-email">{this.props.billing.email}</span>
                </p>

                <div className="text-estimated">
                    Estimated delivery Day is
                    <div><b>Friday 1st April 2016</b></div>
                </div>

                <p className="print-recipe">Print Recipe</p>
            </div>
        )
    }
}

export default Success;