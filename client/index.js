import React       from 'react';
import { render}   from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//Import Components
import App        from './components/App';
import Shipping   from './components/orderPayment/Shipping';
import Billing   from './components/orderPayment/Billing';
import Payment   from './components/orderPayment/Payment';
import Success   from './components/orderPayment/Success';

//import react router deps
import { Router, Route, IndexRoute, browserHistory }  from 'react-router';

import { Provider }        from 'react-redux';
import  store, { history } from './store';


const app = (
   <Provider store={store}>
         <Router history={history}>
               <Route path="/" component={App}>
                     <IndexRoute component={Shipping}></IndexRoute>
                     <Route path="/billing" component={Billing} />
                     <Route path="/payment" component={Payment} />
                     <Route path="/success" component={Success} />
                     <Route path="*" component={Shipping} />
               </Route>
         </Router>
   </Provider>

)

render(app,
      document.getElementById('root'))