import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Login.css'
import { useNavigate } from 'react-router-dom'


export default function Login(props) {

  const nav = useNavigate();

  const [enteredUser,setEnteredUser] = useState('');
  const [enteredPw,setEnteredPw] = useState('');



  const validAccount = () => {

    if(enteredUser == 'ADMIN' && enteredPw == 'ADMIN')
      return nav('/bankai')

    for(let i = 0; i < props.usersArr.length; i++)
      {
        if(props.usersArr[i].userName == enteredUser.toLowerCase() && props.usersArr[i].password == enteredPw)
        {
          props.chosenAcc(props.usersArr[i])
          return nav('/personalarea')
        }
      }
      alert('Incorrect username or password');
      setEnteredUser('')
      setEnteredPw('')
  }



  return (
    <div className='login-container'>

      <div className='login-content'>
        <h1>Aviv's Bank</h1>

        <div>
          <input onChange={(e)=>{setEnteredUser(e.target.value)}} type="text" placeholder='Username' value={enteredUser}/><br />
          <input onChange={(e)=>{setEnteredPw(e.target.value)}} type="password" placeholder='Password' value={enteredPw}/>
        </div>
        <div className='low-section'>
          <Link to='/register'><button className='createBtn'>Create new user</button></Link><br />
          <button className='enterBtn' onClick={()=>{validAccount()}}>Enter</button>
        </div>
        <h5>AvivAsher&#x00A9;</h5>
      </div>


    </div>
  )
}


