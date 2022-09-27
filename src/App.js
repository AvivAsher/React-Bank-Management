import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import {useState} from 'react'
import Register from './Components/Register';
import PersonalArea from './Components/PersonalArea';
import Bankai from './Components/Bankai';
import Edit from './Components/Edit';


function App() {


  const [allUsers,setAllUsers] = useState([])
  const [currentUser,setCurrentUser] = useState('');
  

  const perAccount = (current) =>{
    setCurrentUser(current);
  }


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Login usersArr = {allUsers} editUsers = {setAllUsers} chosenAcc = {perAccount}/>}/>
            <Route path='/register' element = {<Register usersArr = {allUsers} editUsers = {setAllUsers}/>}/>
            <Route path='/personalarea' element = {<PersonalArea user = {currentUser}/>}/>
            <Route path='/bankai' element = {<Bankai usersArr = {allUsers} editUsers = {setAllUsers}/>}/>
            <Route path='/edit' element = {<Edit user = {currentUser}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
