
//Eggs: price_1MKD2rK11UL5Q4XtSEU47hx0
//Sausage: price_1MKD3mK11UL5Q4XtJiULSaVE

const productsArray = [
    {
        id: "price_1MKD1PK11UL5Q4XtRzLSp9ad",
        title: "Contadina",
        price: 4.99,
        image: "https://i.ibb.co/VjCkQ9t/Chicken-Contadina-on-a-plate.jpg"
    },
    {
        id: "price_1MKD2rK11UL5Q4XtSEU47hx0",
        title: "Eggs",
        price: 9.99, 
        image: "https://i.ibb.co/FgCw0Gm/egg2.jpg"
    },
    {
        id: "price_1MKD3mK11UL5Q4XtJiULSaVE",
        title: "Sausage",
        price: 14.99,
        image: "https://i.ibb.co/0GZr48V/southgate-mote-hotel-accommodation-mt-gambia-the-gates-breakfast.jpg"
    },
    {
        id: "price_1MKDphK11UL5Q4Xt4jOaMACF",
        title: "Contadina",
        price: 11.99,
        image: "https://i.ibb.co/k4frCr1/31231.jpg"
    },
    {
        id: "price_1MKDqEK11UL5Q4XtAt1MTOgZ",
        title:"Hashbrowns",
        price: 9.99,
        image: "https://i.ibb.co/9V7bCF5/hash-brown-breakfast-fry-up-bacon.jpg"

    },
    {
        id: "price_1MKDqhK11UL5Q4Xtn89inlRB",
        title: "Egg/toast",
        price: 8.99,
        image: "https://i.ibb.co/YNChxPK/best-breakfast-foods-for-fat-loss-egg-1024x1024.jpg"
    },
    {
        id: "price_1MKDr3K11UL5Q4Xtzk5Rmnzn",
        title: "Soup",
        price: 11.99,
        image: "https://i.ibb.co/GT1W0hG/Healthy-Restaurants-Hong-Kong-Destination-Deluxe.jpg"
    }, 
    {
        id: "price_1MKDrbK11UL5Q4XtbnJQ5qui",
        title: "Breakfast",
        price: 19.99,
        image: 'https://i.ibb.co/Qpw08sv/Copy-of-Black-Yellow-Orange-Asian-Flatlay-Food-Facebook-Cover.png'
    }


]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };