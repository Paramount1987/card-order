import React      from 'react';

class Main extends React.Component{

    componentDidMount(){
        this.context.router.push('/');
    }

   render(){

      return (
         <div className="app-wrap">
            <div>

            </div>
             <div className="order-wrap">
                 <div className="order-payment">
                    { React.cloneElement(this.props.children, this.props) }
                 </div>
                 <div className="order-summary">

                 </div>
             </div>

         </div>
      )
   }
}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Main;