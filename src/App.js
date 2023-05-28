import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import BecomeHost from './components/BecomeHost';
import AddProperty from './components/AddProperty';
import RateProperty from './components/RateProperty';
import ReservationDetails from './components/ReservationDetails';
import Favorites from './components/Favorites';
import PropertyDetails from './components/PropertyDetails';
import AddReservation from './components/AddReservation';
import ViewProperty from './components/ViewProperty';
import UpdateProperty from './components/UpdateProperty';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/reservations' element={< ReservationDetails />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/signup' element={< SignUp />}></Route>
        <Route exact path='/rateproperty' element={< RateProperty />}></Route>
        <Route exact path='/addproperty' element={< AddProperty />}></Route>
        <Route exact path='/host' element={< BecomeHost />}></Route>
        <Route exact path='/favorites' element={< Favorites />}></Route>
        <Route exact path='/propertydetails' element={< PropertyDetails />}></Route>
        <Route exact path='/addreservation' element={< AddReservation />}></Route>
        <Route exact path='/reservationdetails' element={< ReservationDetails />}></Route>
        <Route exact path='/myproperties' element={< ViewProperty />}></Route>
        <Route exact path='/updateproperty' element={< UpdateProperty />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
