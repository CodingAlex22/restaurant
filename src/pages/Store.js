
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard'; 
import { Helmet, HelmetProvider } from "react-helmet-async";
import Container1 from '../layers/container1'
import Container2 from '../layers/container2'
import Container3 from '../layers/container3'
import Container4 from '../layers/container4'
import Container5 from '../layers/container5'


function Store(){
    return (
        
        <>
        <HelmetProvider>
        <Helmet>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
            <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        </Helmet>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        </HelmetProvider>
    </>
    )
}

export default Store;