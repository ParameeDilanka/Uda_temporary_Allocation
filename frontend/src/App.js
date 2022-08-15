import React, {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import TempList from "./components/tempallocationlist";
import EditTemp from "./components/edit-temporaryallocation.component";
import CreateTemp from "./components/create-temporaryallocation.component";
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Home/Homepage';
import CreateDetail from './components/createdetail';
import detailsList from './components/detaillist';
import EditDetail from "./components/edit-details";
import {useDispatch, useSelector} from 'react-redux';
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction';
import Body from './components/body/Body';
import axios from 'axios';
import SideBar from './components/Sidebar/sidebar';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])

  return (
 <Router>
     <Header/>
      <SideBar />
      <Route path="/" exact component={Homepage}/>
      <Route path="/create" component={CreateTemp} exact />
      <Route path="/list"  component={TempList} exact  />
      <Route path="/edit/:id" component={EditTemp} exact />
      <Route path="/editd/:id" component={EditDetail} exact />
      <Route path="/detail" component={CreateDetail} exact /> 
      <Route path="/detaillist" component={detailsList} exact/>
      <Body />
      <Footer/>
    </Router>
  );
} 
export default App;