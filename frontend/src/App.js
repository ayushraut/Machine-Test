import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login'
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Display from './Components/Display';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} > </Route>
    <Route path="/Registration" element={<Registration/>} > </Route>
    <Route path="/Home" element={<Home/>} > </Route>
    <Route path="/Create" element={<Create/>} > </Route>
    <Route path="/Edit/:id" element={<Edit/>} > </Route>
    <Route path="/Display" element={<Display/>} > </Route>
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
