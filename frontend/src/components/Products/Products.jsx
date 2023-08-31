import React from 'react'
import './Products.css'
import AddProduct from './addProduct'
export default function Products() {
    const handlebutton = () => {
        const addproductform = document.getElementById('add-product-from');
        //toggle hide
        addproductform.style.display = addproductform.style.display === 'none' ? '' : 'none';
    }



  return (
    <div className='products'>
        <h1>Products</h1>
        <div>
        <button className="add-product-button" onClick={handlebutton}>Add Product</button>
        
        <div id='add-product-from' style={{display:'none'}}>
            <AddProduct/>
        </div>
        
        
        </div>
<table className="product-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                {/* ... Add more table headers if needed ... */}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Product 1</td>
                <td>$1.00</td>
                {/* ... Render additional table cells if needed ... */}
            </tr>
            <tr>
                <td>2</td>
                <td>Product 2</td>
                <td>$2.00</td>
                {/* ... Render additional table cells if needed ... */}
            </tr>
        </tbody>
        </table>
        
    </div>
  )
}
