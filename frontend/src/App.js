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
    
      <Footer/>
     </div>
    </Router>
  );
} 
export default App;