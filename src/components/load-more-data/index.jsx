import React, { useEffect, useState } from "react";
import './styles.css';

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();
            if (result) {
                setProducts((prevData) => [...prevData, ...result.products]);
            }
            setLoading(false);
            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);
    
    useEffect(()=> {
        if (products && products.length === 100) {
            setDisableButton(true)
        } 
    }, [products])

    if (loading) {
        return <div>Please Wait Loading</div>;
    }


    return (
        <div className="img-container container-fluid wrapper1 text-center m-0">
            <div className="row w-100 gap-1 justify-content-md-center">
                {products &&
                    products.map((item, index) => (
                        <div key={`${item.id}-${count}-${index}`} className="col-md-2 border border-dark">
                            <img src={item.thumbnail} alt={item.title} className="w-100" />
                            <p>{item.title}</p>
                        </div>
                    ))}
            </div>
            <button className="loadMore" disabled={disableButton} onClick={() => setCount(count + 1)}>Load More</button>
        </div>
    );
};

export default LoadMoreData;
