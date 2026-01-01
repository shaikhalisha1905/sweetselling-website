// client/src/components/ProductTable.js
import React from 'react';

const ProductTable = ({ products = [], onEdit, onDelete }) => {

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th style={{backgroundColor:"rgb(169, 134, 89)"}}>Name</th>
                    <th style={{backgroundColor:"rgb(169, 134, 89)"}}>Category</th>
                    <th style={{backgroundColor:"rgb(169, 134, 89)"}}>Price</th>
                    <th style={{backgroundColor:"rgb(169, 134, 89)"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((product) => (
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={() => onDelete(product._id)} style={{borderRadius:"8px",backgroundColor:"rgb(169, 134, 89)",border:"0px"}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>    
    );
};

export default ProductTable;
