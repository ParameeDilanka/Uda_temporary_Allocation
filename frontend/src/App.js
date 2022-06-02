import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import TempList from "./components/tempallocationlist";
import EditTemp from "./components/edit-temporaryallocation.component";
import CreateTemp from "./components/create-temporaryallocation.component";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Homepage from './components/Home/Homepage';
import CreateDetail from './components/createdetail';
import detailsList from './components/detaillist';
import EditDetail from "./components/edit-details";
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
 <Router>
            <Header/>
            <Route path="/" exact component={Homepage} />
            <div>
      <Route path="/list" exact component={TempList} />
      <Route path="/edit/:id" component={EditTemp} />
      <Route path="/editd/:id" component={EditDetail} />
      <Route path="/create" component={CreateTemp} />
      <Route path="/detail" component={CreateDetail} /> 
      <Route path="/detaillist" component={detailsList} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Footer/>
     </div>
    </Router>
  );
} 

export default App;export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}


