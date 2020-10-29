import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from '../pages/Logon/';
import Feed from '../pages/Feed/';
import Profile from '../pages/Profile/';

export default function Routes(){

  return (

    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Logon}></Route>
          <Route path="/feed" component={Feed}></Route>
          <Route path="/profile" component={Profile}></Route>
       </Switch>
    </BrowserRouter>
  )
}
