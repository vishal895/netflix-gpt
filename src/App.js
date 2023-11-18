import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/signup/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      
    
  );
}

export default App;
