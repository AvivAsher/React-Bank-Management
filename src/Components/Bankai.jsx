import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Bankai.css'
import ManageList from './ManageList'

export default function Bankai(props) {

  const noUsers = () =>{
    if(props.usersArr.length == 0){
      return 'There are currently no users in your bank.'
    }
  }



  return (
    <div className='bankai-container'>

      <div className='back-to-home'>
        <Link to={'/'}><button>Home</button></Link>
      </div>

      <div className="bankai-frame">
        <h2>Users Manager Panel</h2>
        <h3>{noUsers()}</h3>

        <div>
          {props.usersArr.map((val, i) => {
            return <ManageList editUsers={props.editUsers} usersArr={props.usersArr} index={i} />
          })}
        </div>

        <footer className='foot'>
          <h5>AvivAsher&#x00A9;</h5>
        </footer>
      </div>

    </div>
  )
}
