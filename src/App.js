
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Header';
import ListEmployee from './ListEmployee';
import Employee from './Employee';


function App() {
  return (
    <>
     <Header />
    <BrowserRouter>
  
    <Routes>
    <Route path='/' element={<ListEmployee />}></Route> 
    <Route path='/add-employee' element={<Employee />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
