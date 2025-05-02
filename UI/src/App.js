
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header'

import Employee from './components/employee/Employee';
import ListEmployee from './components/employee/ListEmployee';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path='/add-employee' element={<Employee />}></Route>
          <Route path='/edit-employee/:id' element={<Employee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
