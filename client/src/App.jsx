import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogDetail from './components/DogDetail';
import DogCreate from './components/DogCreate';
import SearchBar from './components/SearchBar';

const App =()=>{
  return (
  
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/dogs' element={<DogCreate />} />
          <Route exact path='/home/:id' element={<DogDetail />} />
          <Route exact path='/home/search' element={<SearchBar />} />
        </Routes>
      </div>
    
  );
}
export default App