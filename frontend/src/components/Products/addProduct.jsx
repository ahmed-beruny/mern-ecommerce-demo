import React, { useState } from 'react';

function AddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    // Add more fields as needed
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (product.name && product.price) {
      onAddProduct(product);
      setProduct({
        name: '',
        price: '',
      });
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
