import React, { useState } from 'react';

function AddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    //category: '',
    quantity: '',
    shipping: '',
    // Add more fields as needed
  });

  //get token from cookie named jwttoken
  const getCookie = (name) => {
    let cookieValue = null;
    if(document.cookie && document.cookie !== ''){
      const cookies = document.cookie.split(';');
      for(let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();
        //does this cookie string begin with the name we want?
        if(cookie.substring(0, name.length + 1) === (name + '=')){
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const token = getCookie('jwttoken');
  console.log(token);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(product);
    if (product.name && product.price) {

      const Response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if(Response.ok){
        setProduct({
          name: '',
          price: '',
          description: '',
          category: '',
          quantity: '',
          shipping: '',
        });
      }
      else{
        console.error('Post failed');
      }
      

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
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
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
          <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            //onChange={handleInputChange}
          />
          </div>
          <div>
            <label>Quantiy:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
            />
        </div>
        <div>
          <label>Shipping</label>
          <input
            type="boolean"
            name="shipping"
            value={product.shipping}
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
