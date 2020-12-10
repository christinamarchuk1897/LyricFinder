import React from 'react'
import NavBar from './commponents/layout/NavBar'
import Index from './commponents/layout/Index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Provider from './context'
import Lyrics from './commponents/tracks/Lyrics'
function App() {
  return (
     <Provider>
        <Router>
        <React.Fragment>
            <NavBar/>
            <div className="container">
              <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/lyrics/track/:id' component={Lyrics}></Route>
              </Switch>
              
            </div>
        </React.Fragment>
      </Router>
     </Provider>
  );
}

export default App;
