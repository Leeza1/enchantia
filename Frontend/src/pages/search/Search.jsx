import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useParams } from 'react-router-dom';
import { searchNecklaceApi, searchProductsApi } from '../../apis/Api';
import { toast } from 'react-toastify';

const Search = () => {

    const { query } = useParams();
    const [products, setProducts] = useState([]);
    const [necklaces, setNecklaces] = useState([]);
    const [item, setItems] = useState([]);
        
    
    const [searchQuery, setSearchQuery] = useState(query);




    //can use this code as well
    // useEffect(() => {
    //     Promise.all([searchProductsApi(query), searchNecklaceApi(query)])
    //       .then(([productsRes, necklacesRes]) => {
    //         console.log(productsRes.data);
    //         setProducts(productsRes.data);
    //         console.log(necklacesRes.data);
    //         setNecklaces(necklacesRes.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }, []);


    useEffect(() => {
        searchProductsApi(query).then(res => {
            console.log(res.data)
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        });

        //fetch necklaces
        searchNecklaceApi(query).then(res => {
            console.log(res.data)
            setNecklaces(res.data)
        }).catch(err => {
            console.log(err)
        });
    })

    useEffect(() => {
        // Combine products and necklaces into items array
        const combinedItems = [...products, ...necklaces];
        setItems(combinedItems);
      }, [products, necklaces]);

    // 
    const handleSearch = (e) => {
        e.preventDefault();
      
        Promise.all([searchProductsApi(searchQuery), searchNecklaceApi(searchQuery)])
          .then((res,) => {
            console.log(res.data);
            setProducts(res.data);
            console.log(res.data);
            setNecklaces(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      };
      

    return (
        <div className='container mt-3'>
            <div className='d-flex justify-content-between'>
                <h4>Search products</h4>

                <form action="">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="form-control mb-3" placeholder="Search products by name" />
                    <button onClick={handleSearch} type="submit" hidden>Search</button>
                </form>

            </div>
            <p>
                Result for <strong>"{searchQuery}"</strong>
            </p>

            <div className='row row-cols-1 row-cols-md-4 g-4 row'>
                {
                    
                    item.length > 0 ? item.map(item => (
                        <Card product={item} />
                    )) : <h4>No product found</h4>
                }
            </div>
        </div>
    )
}

export default Search