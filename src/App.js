import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
     <Provider store = {store}>
           <Router>
               <div className="App">
                  <Navbar />
                  <Switch>

                     <Route exact path="/">
                        <Dashboard />
                     </Route>

                     <Route path='/project/:id'>
                        <ProjectDetails />
                     </Route>

                     <Route path='/signin'>
                        <SignIn />
                     </Route>

                     <Route path='/signup'>
                        <SignUp />
                     </Route>

                     <Route path="/create">
                        <CreateProject />
                     </Route>
                  </Switch>
               </div>
          </Router>
      </Provider>
  );
}

export default App;
