import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            <h1>All Product : </h1>
            {props.product.map((product, idx)=>{
                return<h2 key={idx}><Link to ={ "/product/" + product._id}>{product.title}</Link> </h2>
                
            })}
        </div>
    )
}