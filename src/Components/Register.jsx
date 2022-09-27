
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Register.css'


export default function Register(props) {

  const nav = useNavigate()
  // window.location.reload(false)  //Refresh page


  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [money, setMoney] = useState(0);


  const checkInfo = () => {

    if (id.length < 9)
      return alert('ID need to be 9 numbers.');


    if (!id.match(/^[0-9]*$/))
      return alert('Can only enter numbers.');

    if (username.length < 4)
      return alert('Username must be minimum 4 characters.')

    if (password.length < 6)
      return alert('Password must be minimum 6 characters.')

    if (password != confirm)
      return alert("Passwords are not match.")

    if (money == '' || money > 1000000)
      return alert('You need to enter between 0 - 1000000 in the money section.')

    for(let i = 0; i < props.usersArr.length; i++)
    {
      if(id == props.usersArr[i].id)
        return alert('There is already an account with that id.')
    }

    let client = new Client(id, username.toLowerCase(), password, Number(money))

    props.editUsers([...props.usersArr,client])
    nav('/')
  }


  return (
    <div className='register-container'>
      <div className='register-content'>
        <h2>Register</h2>
        <input onChange={(e) => { setId(e.target.value) }} type="text" placeholder='ID' maxLength={9} /><br />
        <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='User Name' /><br />
        <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' /><br />
        <input onChange={(e) => { setConfirm(e.target.value) }} type="password" placeholder='Confirm Password' /><br />
        <input onChange={(e) => { setMoney(e.target.value) }} type="text" placeholder='Money' /><br />
        <button onClick={() => { checkInfo() }}>Create</button>
        <button onClick={() => { nav('/') }}>Back</button>
        <h5>AvivAsher&#x00A9;</h5>
      </div>
      <div>
      </div>
    </div>
  )
}


class Client {

  expenses = [];

  constructor(id, userName, password, money) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.money = money;
  }
}
