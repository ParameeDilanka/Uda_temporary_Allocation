import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AppointmentsList from "./components/tempallocationlist";
import EditAppointment from "./components/edit-temporaryallocation.component";
import CreateAppointment from "./components/create-temporaryallocation.component";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Homepage from './components/Home/Homepage';
import CreateDetail from './components/createdetail';
import detailsList from './components/detaillist';
import EditDetail from "./components/edit-details";
function App() {
  return (
 <Router>
            <Header/>
            <Route path="/" exact component={Homepage} />
            <div>
     <Route path="/list" exact component={AppointmentsList} />
      <Route path="/edit/:id" component={EditAppointment} />
      <Route path="/editd/:id" component={EditDetail} />
      <Route path="/create" component={CreateAppointment} />
      <Route path="/detail" component={CreateDetail} /> 
      <Route path="/detaillist" component={detailsList} />
      <Footer/>
     </div>
    </Router>
  );
} 

export default App;