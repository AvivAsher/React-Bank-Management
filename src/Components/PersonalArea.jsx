import React, {useState} from 'react'
import '../CSS/PersonalArea.css'
import {Link} from 'react-router-dom'

export default function PersonalArea(props) {

  const [payment,setPayment] = useState()

  const [company,setCompany] = useState('')
  const [price,setPrice] = useState('')

  let expense = {
    company:'',
    price: ''
  }



  const checkBalance = () => {
    return alert(props.user.money + '₪');
  }

  const showPayment = (expense) => {

    if(payment == true)
      {
        return <div className='payAction'>

          <input onChange={(e)=>{setCompany(e.target.value)}} type="text" placeholder='Company Name'/>
          <input onChange={(e)=>{setPrice(e.target.value)}} type="number" placeholder='Price'/>
    
          <button className='openAction' onClick={()=>{addPurchase(expense)}}>Buy</button>
          <button className='closeAction' onClick={()=>{setPayment(false)}}>Close</button>
        
        </div>
      }


  }

  const addPurchase = (expense) =>{
    if(company == '')
      return alert('Please enter a company name');
    
    if(price == '' || !price.match(/^[0-9]*$/))
      return alert('Please enter only numbers in price.');
      
    else {
      expense.company = company;
      expense.price = Number(price);
      props.user.expenses.push(expense);
      setCompany('')
      setPrice('')
      setPayment(false)
      alert('The purchased as been added to your list.')
    }
  }

  return (
    <div className='personal-container'>
      <div style={{width: '150px', margin:'0 auto', lineHeight:'15px'}}>
        <h1>Welcome</h1>
      </div>

      <div className='displayName'>
        <h2>{props.user.userName}</h2>
      </div>
      
      <div className='actions-area'>
          <button className='sameBtn' onClick={()=>{checkBalance()}}>Balance</button>
          <button className='sameBtn' onClick={()=>{setPayment(true)}}>Action</button>
          {showPayment(expense)}
          <Link to = '/'><button className='sameBtn'>Exit</button></Link>
          <Link to = '/edit'><button className='sameBtn'>Edit</button></Link>
      </div>
      <h5>AvivAsher&#x00A9;</h5>
    </div>
  )
}
