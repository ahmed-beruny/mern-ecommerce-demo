import React, { useState } from 'react';

function AddCustomer({ onAddCustomer }) {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (customer.name && customer.email) {
      onAddCustomer(customer);
      setCustomer({
        name: '',
        email: '',
      });
    }
  };

  return (
    <div className="add-customer">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;
