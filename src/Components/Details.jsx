import React, { useState } from 'react'
import '../CSS/Details.css'

export default function Details(props) {

  const [flag, setFlag] = useState(false)

  let total = 0;
  if (props.user.expenses.length > 0) {
    for (let j = 0; j < props.user.expenses.length; j++) {
      total += props.user.expenses[j].price;
    }
  }


  const deleteFromList = (i) => {

    if (window.confirm('Are you sure you want to delete this transaction?') == true) {
      props.user.expenses.splice(i, 1);
      setFlag(!flag)
    }

  }

  //when we use .toLocaleString() on a number it make h4e number a string and h4e code knows where to put h4e commas in large numbers.
  
  return (
    <div className='details-container'>

          <div className='headers'>
            <div className='wid'><h4>Company</h4></div>
            <div className='wid'><h4>Amount</h4></div>
            <div className='wid'><h4>Delete</h4></div>
          </div>

          <div className='per-line'>
            {props.user.expenses.map((val, i) => {
              return <div className='per-option'>
                      <div className='wid'>{val.company}</div>
                      <div className='wid'>{val.price.toLocaleString()}₪</div>
                      <div className='wid'><button onClick={() => { deleteFromList(i) }} className='delete-btn'>&#x1F5D1;</button></div>
              </div>
            })}
          </div>


      <div className='total-amount'>
        <h4>Total: {total.toLocaleString()}₪</h4>
      </div>
    </div>
  )
}
