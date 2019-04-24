import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';

const store = require('./reducers').init();

class App extends React.Component {

  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div>
              <Header />
              <div className='container'>
                <Route exact path="" render = { () => <Redirect to='/rentals' />  } />
                <Route exact path="/rentals" component={RentalListing} />
                <Route exact path="/rentals/:id" component={RentalDetail} />
              </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
