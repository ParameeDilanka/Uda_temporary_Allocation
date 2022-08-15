import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'
import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'
import {useSelector} from 'react-redux'
import TempList from "../tempallocationlist"
import EditTemp from "../edit-temporaryallocation.component"
import CreateTemp from "../create-temporaryallocation.component"
import Homepage from '../Home/Homepage'
import CreateDetail from '../createdetail';
import detailsList from '../detaillist';
import EditDetail from "../edit-details";

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
               
                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
                <Route path="/" exact component={Homepage}/>
      <Route path="/create" component={CreateTemp} exact />
      <Route path="/list"  component={TempList} exact  />
      <Route path="/edit/:id" component={EditTemp} exact />
      <Route path="/editd/:id" component={EditDetail} exact />
      <Route path="/detail" component={CreateDetail} exact /> 
      <Route path="/detaillist" component={detailsList} exact/> 
            </Switch>
        </section>
    )
}

export default Body
