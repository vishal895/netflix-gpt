import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/signup/Login';
import { Provider } from 'react-redux';
import appstore from './utlis/Redux/appstore';
import BrowserPage from './pages/browserPage/BrowserPage';

function App() {
  return (
    <Provider store={appstore}>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/browser' element={<BrowserPage/>}/>
    </Routes>
    </Provider>
      
    
  );
}

export default App;
