import React , {useEffect , useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';



export default() =>{
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:8000/addproduct')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = productId => {
        setProduct(product.filter(person => person._id != productId));
    }

    return(
        <div>
            <ProductForm />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}

        </div>
    )
}