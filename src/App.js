import './App.css';
import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, addToWishlist, removeFromWishlist} from "./redux";


const Header = () => {
    const {wishlist} = useSelector(({products}) => products)

    const wishlistTotalPrice = wishlist.reduce((acc, el) => {
        return (acc += el.price);
    }, 0)

    return (
        <>
            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1>Our nice shop!</h1>


                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <h1 style={{marginRight: "20px"}}>cart: {0}</h1>
                    <h1 title={wishlistTotalPrice}>wishlist: {wishlist.length}</h1>
                </div>
            </header>
            <hr/>
        </>
    )

}

const isInWishlist = (wishlist, id) => !!wishlist.find(el => el.id === id)

const Products = () => {
    const {wishlist} = useSelector(({products}) => products)

    const {products, isProductsLoading} = useSelector(({products}) => products)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts({
            // field: 'price',
            // order: 'ASC'
        }))
    }, [])


    if (isProductsLoading) {
        return <div>LOADING!</div>
    }


    return (<div>
        {products.map(product => (
            <div key={product.id} style={{
                width: "40%",
                margin: "40px auto"
            }}>
                <button onClick={() => {
                    isInWishlist(wishlist, product.id)
                        ? dispatch(removeFromWishlist(product.id))
                        : dispatch(addToWishlist(product.id))
                }}>
                    {isInWishlist(wishlist, product.id)
                        ? 'remove from wishlist'
                        : 'add to wishlist'}
                </button>


                <h4>{product.title}
                    <br/>
                    Price: {product.price}$</h4>
                <p>{product.description}</p>
                <img style={{
                    width: "40%"
                }} src={product.image} alt=""/>

            </div>
        ))}
    </div>)

}


function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>
        </div>
    );
}

export default App;
