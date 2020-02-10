import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calender from './calender'

const Main = () => (
  <BrowserRouter>
  <Switch>
  <Route exact path="/"/>
    <Route path="/shows" component={Calender}/>
    {/* <Route path="/aboutme" component={Aboutme}/> */}
 
 </Switch>
 </BrowserRouter>
)

export default Main;