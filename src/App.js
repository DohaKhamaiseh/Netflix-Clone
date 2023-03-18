import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar' ;
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home' ;
import FavList from './components/FavList' ;

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<FavList />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
