import React from 'react'
import './Customers.css'
import AddCustomer from './addCustomers'

export default function Customers() {
    const handlebutton = () => {
        const addcustomerform = document.getElementById('add-customer-form');
        //toggle hide
        addcustomerform.style.display = addcustomerform.style.display === 'none' ? '' : 'none';
    }

    const [customers, setCustomers] = React.useState([]);

    const getCustomers = async () => {
        const response = await fetch('http://localhost:8000/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        setCustomers(data);
    };

    React.useEffect(() => {
        getCustomers();
    }, []);
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
            <th>Email</th>
            <th>About</th>
            <th>Role</th>
            <th>History</th>
            {/* ... Add more table headers if needed ... */}
          </tr>
        </thead>
        <tbody>
          {
            customers.map(customer => (
              <tr key={customer._id}>
                <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.about}</td>
                <td>{customer.role}</td>
                <td>{customer.history}</td>
                {/* ... Add more table data if needed ... */}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
