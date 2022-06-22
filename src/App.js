import React, {useState} from 'react';
import Login from './Login';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MyProfile from "./MyProfile.js"


function App() {

  const [currentUser, setCurrentUser] = useState({})

  return (
    <BrowserRouter> 
        <Switch>
          <Route exact path = "/">
              <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path = "/MyProfile">
            <MyProfile currentUser={currentUser}/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

