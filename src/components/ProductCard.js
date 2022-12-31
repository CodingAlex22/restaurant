import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    const colors = {
        backgroundColor: "#FF0000",
    }
    return (
        <figure className = "position-relative">
                        
                            <img src = {product.image} alt = "image2" className="img-fluid" /> 
                            <figcaption className="img-fluid">
                            <div class = "contadina">{product.title}</div>
                            <div class = "stars">★ ★ ★ ★ ★</div>
                            <div class = "image__title">${product.price}</div>
                            {productQuantity > 0 ? 
                            <>
                                <div class = "alternative-pick">
                                <button class = "remove" id="buttoncolor" onClick={() => cart.removeOneFromCart(product.id)}><a>-</a></button>
                                     
                                     <button class = "remove" onClick={() => cart.deleteFromCart(product.id)}><a>-</a>Remove</button>

                                     <button class = "remove" id="buttoncolor" onClick={() => cart.addOneToCart(product.id)} ><a>+</a></button>
                                     <p class = "incart">In cart: {productQuantity}</p>
                                </div>
                            
                            </>
                            :
                            <button class = "ordernow1" onClick={() => cart.addOneToCart(product.id)}><a>Order Now</a></button>
                             }
                            
                            </figcaption>
        </figure>  
    )
}

export default ProductCard;