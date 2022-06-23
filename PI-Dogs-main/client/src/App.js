import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogDetail from './components/DogDetail';
import DogCreate from './components/DogCreate';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path= '/' component={LandingPage}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/dogs' component={DogCreate}/>
    <Route  exact path='/home/:id' component={DogDetail}/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
