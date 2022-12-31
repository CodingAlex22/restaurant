import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore'
import { Container } from "react-bootstrap"
import CartProvider from '../CartContext';
import ProductCard from '../components/ProductCard';

const container2 = () => {
    return (
        <> 
<div id = "container3">
    <div class = "container container-flex" id = "cuisine">
        <p class = "order" id = "subtitle">Order online now</p>
        <h2>Our Specility Cuisine</h2>
        <ul class = "food">
            <li a href = "/#">Breakfast</li>
            <li a href = "/#">Lunch</li>
            <li a href = "/#">Dinner</li>
            <li a href = "/#">Dessert</li>
            <li a href = "/#">Shake</li>
        </ul>
   

        <Row xs={1} sm={2} md={4} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>


     
  
    </div>
</div>
</>
    )

}

export default container2