import React, { useEffect, useState } from 'react';
import './Products.css';

function AddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    quantity: '',
    shipping: '',
    // Add more fields as needed
  });

  const [categories, setCategories] = useState([]);

  //get categories from backend
  const getCategories = async () => {
    const Response = await fetch('http://localhost:8000/api/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await Response.json();
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

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

  const covertBase64 = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: reader.result,
      }));
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    }
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
        
        window.location.reload();


      }
      else{
        console.error('Post failed');
      }
      

    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Name:</label>
          <input

            type="text"
            name="name"
            value={product.name}
            required
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
            required
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={covertBase64}
          />
          {
            product.image && (
              <img src={product.image} alt="product" style={{ width: '100px' }} />
            )
          }
        </div>
          <div>
          <label>Category:</label>
          <select
            name="category"
            required
            value={product.category}
            onChange={handleInputChange}
          >
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}

          </select>
          </div>
          <div>
            <label>Quantiy:</label>
            <input
              type="number"
              required
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
            />
        </div>
        <div>
          <label>Shipping</label>
          <input
            type="text"
            name="shipping"
            required
            value={product.shipping}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Add</button>
      </form>
    </div>

  );
}

export default AddProduct;
