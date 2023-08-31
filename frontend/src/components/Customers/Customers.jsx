import React from 'react'
import './Customers.css'
import AddCustomer from './addCustomers'

export default function Customers() {
    const handlebutton = () => {
        const addcustomerform = document.getElementById('add-customer-form');
        //toggle hide
        addcustomerform.style.display = addcustomerform.style.display === 'none' ? '' : 'none';
    }
  return (
    <div className='customers'>
        <h1>Customers</h1>
        <div>
        <button className="add-customer-button" onClick={handlebutton}>Add Customer</button>
        
        <div id='add-customer-form' style={{display:'none'}}>
          <AddCustomer/>
        </div>

        </div>

<table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            {/* ... Add more table headers if needed ... */}
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Beruny</td>
                <td>1234 Main St</td>
                <td>123-456-7890</td>
              {/* ... Render additional table cells if needed ... */}
            </tr>
            <tr>
                <td>2</td>
                <td>John</td>
                <td>1234 Main St</td>
                <td>123-456-7890</td>
                {/* ... Render additional table cells if needed ... */}
            </tr>
        </tbody>
      </table>
    </div>
  )
}
