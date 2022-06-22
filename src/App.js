import React, {useState} from 'react';
import Login from './Login';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MyProfile from "./MyProfile.js"


function App() {

  const [currentUser, setCurrentUser] = useState({})

  return (
    <> 
        <Switch>
          <Route exact path = "/">
              <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>
          <Route path = "/MyProfile">
            <MyProfile currentUser={currentUser}/>
          </Route>
        </Switch>
    </>
  );
}

export default App;

