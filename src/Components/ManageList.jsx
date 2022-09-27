import React, { useState } from 'react'
import '../CSS/Bankai.css'
import '../CSS/ManageList.css'
import Details from './Details';


export default function ManageList(props) {

  const [flag, setFlag] = useState(false);

  const deleteUser = () => {
    if (window.confirm('Are you sure you want to delete this User?') == true)
    {
      let temp = props.usersArr;
      temp.splice([props.index],1)
      props.editUsers([...temp]);
    }
  }


  const showDetails = () => {
    if (flag)
      return <Details user={props.usersArr[props.index]} />
  }

  return (
    <div className="users-container">

      <div className='user-row'>

        <div className="perUserDiv">
          <div>{props.usersArr[props.index].id}</div>
          <div>{props.usersArr[props.index].userName}</div>
          <div><button onClick={() => { setFlag(!flag) }} className='details-btn'>Details&#x2B07;&#xFE0F;</button></div>
        </div>

        <div><button className='del-user-btn' onClick={()=>{deleteUser()}}>Delete User</button></div>
      </div>

      <div className='details-section'>
        {showDetails()}
      </div>

    </div>
  )
}
