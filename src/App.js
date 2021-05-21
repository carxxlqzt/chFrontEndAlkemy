import {Home} from './components/Home'
import {IsForm} from './components/Form'

import {Header} from './components/Header'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import './css/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const store = generateStore()
  return   <div className='vw-100 bg-lightBlue ' >
    <Router>
      <Provider store={store}>
      <Switch>
      <Route path="/" exact>
           <Header/>
            <Home />

          </Route>
      <Route path="/Form" exact>
           <Header/>
          <div className='vh-100'>   <h2 className='m-3'>Choose your post for edit</h2></div>
       

          </Route>
          <Route path="/Form/:id" exact>
           <Header/>
          <IsForm/>

          </Route>
         
        
      </Switch>
     </Provider></Router>
    </div>

}

export default App;
