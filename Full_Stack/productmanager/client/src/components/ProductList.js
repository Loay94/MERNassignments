import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {

    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            <h1>All Product : </h1>
            {props.product.map((product, idx)=>{
                return(
                    <div>
                        <h2 key={idx}><Link to ={ "/product/" + product._id}>{product.title}</Link> </h2>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
                
            })}
        </div>
    )
}