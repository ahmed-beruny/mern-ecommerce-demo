import React from 'react'
import './Products.css'
import AddProduct from './addProduct'
export default function Products() {
    const handlebutton = () => {
        const addproductform = document.getElementById('add-product-from');
        //toggle hide
        addproductform.style.display = addproductform.style.display === 'none' ? '' : 'none';
    }

    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        setProducts(data);
    };

    React.useEffect(() => {
        getProducts();
    }, []);

    


    const deleteItem = (id) => {
        const deleteProduct = async () => {
            const response = await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            getProducts();
        };
        return deleteProduct;
    };




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
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Shipping</th>
                <th>Description</th>
                <th>Image</th>
                
                {/* ... Add more table headers if needed ... */}
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => (
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>Empty</td>
                        <td>{product.quantity}</td>
                        <td>{product.shipping}</td>
                        <td>{product.description}</td>
                        <td><img src={product.image} alt=""/></td>
                        <td><button onClick={
                            deleteItem(product._id)
                        }>Delete</button></td>
                        {/* ... Add more table data if needed ... */}
                    </tr>
                ))
            }
        </tbody>
        </table>
        
    </div>
  )
}
