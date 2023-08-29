import React from 'react'
import './Customers.css'
import AddCustomer from './addCustomers'

export default function Customers() {
  return (
    <div className='customers'>
        <h1>Customers</h1>
        <div>
        <button className="add-customer-button">Add Customer</button>
        <AddCustomer />

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
