import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Export from './component/Export';
import Import from './component/Import';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
     <Router>
       <Navbar/>
       <Import/>
       <Export/>
       <Switch>
        <Route exact path="/" component={Home}/>
       </Switch>
     </Router>
    </>
  );
}

export default App;
