const products = [
    {
        id: 1,
        name: "OKAZU Lovers Set (230ml/12 jars)",
        price: 135.00,
        originalPrice: 167.88,
        rating: 5,
        reviews: 32,
        category: "Chili oil,Okazu",
        type: "Multi Set",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlWFWOIlEy0r_-y9CKt3RWiQcByL5UzLfxQ&s",
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlWFWOIlEy0r_-y9CKt3RWiQcByL5UzLfxQ&s",
            "https://www.abokichi.com/cdn/shop/products/Untitleddesign-2020-09-15T145608.413_0de55a4f-ba7c-4477-a779-5529e4164c66.png?v=1776777477&width=480",
            "https://www.abokichi.com/cdn/shop/products/ASpoonfulofOKAZU_94f423a8-41e3-49ba-ab98-b37940c9a28a.jpg?v=1776774452&width=480"
        ],
        description: "Your new cooking BFF! You can add this to virtually everything. Try it on rice, on meat or tofu, in your burger, ramen and pretty much anything."
    },
    {
        id: 2,
        name: "OKAZU - CHILI MISO - Japanese miso chili oil condiment (230ml)",
        price: 13.99,
        originalPrice: null,
        rating: 4,
        reviews: 24,
        category: "Chili oil,Okazu",
        type: "Single Pack",
        image: "https://www.abokichi.com/cdn/shop/products/Untitleddesign-2020-09-15T145608.413_0de55a4f-ba7c-4477-a779-5529e4164c66.png?v=1776777477&width=480",
        thumbnails: [
            "https://www.abokichi.com/cdn/shop/products/Untitleddesign-2020-09-15T145608.413_0de55a4f-ba7c-4477-a779-5529e4164c66.png?v=1776777477&width=480",
            "https://www.abokichi.com/cdn/shop/files/New_Spicy_Chili_2.png?v=1776252357&width=480",
            "https://m.media-amazon.com/images/I/61eyj-wguwL.jpg"
        ],
        description: "A single jar of our award-winning chili miso condiment."
    },
    {
        id: 3,
        name: "Instant Miso Soup Tasting Set",
        price: 19.99,
        originalPrice: 24.00,
        rating: 5,
        reviews: 24,
        category: "Miso Soup",
        type: "Multi Set",
        image: "https://izumibrewery.com/cdn/shop/products/3flavours_1200x1200.png?v=1587397302",
        thumbnails: [
            "https://izumibrewery.com/cdn/shop/products/3flavours_1200x1200.png?v=1587397302",
            "https://cdn.shopify.com/s/files/1/0290/9689/files/Miso_Page_1_480x480.png?v=1679079974",
            "https://www.abokichi.com/cdn/shop/collections/Miso_Page.png?v=1694032446"
        ],
        description: "Taste the difference with our authentic instant miso soup."
    },
    {
        id: 4,
        name: "ABO Matcha: Uji matcha, Organic, Ceremonial grade",
        price: 34.00,
        originalPrice: null,
        rating: 5,
        reviews: 24,
        category: "Instant Matcha",
        type: "Single Pack",
        image: "https://www.abokichi.com/cdn/shop/products/IMG_8015_d7c3e1db-3b5a-47ed-9290-017d59c93a7a.png?v=1675184532&width=1080",
        thumbnails: [
            "https://www.abokichi.com/cdn/shop/products/IMG_8015_d7c3e1db-3b5a-47ed-9290-017d59c93a7a.png?v=1675184532&width=1080",
            "https://www.abokichi.com/cdn/shop/products/IMG_8017_74b48c15-c56e-4b69-b1b5-e75cc235e46b.png?v=1675184529&width=480",
            "https://risemarket.ca/cdn/shop/files/RiseMarket_Abokichi_CeremonialMatcha_30g_Back.gif?v=1708105844&width=1080"
        ],
        description: "Premium ceremonial grade organic matcha from Uji, Japan."
    },
    {
        id: 5,
        name: "Spicy OKAZU Lovers Set",
        price: 135.00,
        originalPrice: 167.88,
        rating: 4,
        reviews: 18,
        category: "Chili oil,Okazu",
        type: "Multi Set",
        image: "https://www.abokichi.com/cdn/shop/files/New_Spicy_Chili.png?v=1776252303&width=480",
        thumbnails: [
            "https://www.abokichi.com/cdn/shop/files/New_Spicy_Chili.png?v=1776252303&width=480",
            "https://images-na.ssl-images-amazon.com/images/I/61vYjNJJOTL._AC_UL210_SR210,210_.jpg",
            "https://cdn11.bigcommerce.com/s-2xe79qkdap/images/stencil/1280x1280/products/3280/1458/OKAZU_SPICY__78056.1644867863.jpg?c=1"
        ],
        description: "For those who like it hot!"
    },
    {
        id: 6,
        name: "Curry OKAZU - Japanese curry chili oil",
        price: 14.99,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        category: "Chili oil,Okazu",
        type: "Single Pack",
        image: "https://m.media-amazon.com/images/I/612Vm9UVvsL.jpg",
        thumbnails: [
            "https://m.media-amazon.com/images/I/612Vm9UVvsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9CD_k7mTR9-lIP8ND8i8UHcK8xg-FFTIyw&s",
            "https://www.abokichi.com/cdn/shop/files/New_Curry.png?v=1779452352&width=480"
        ],
        description: "A unique blend of Japanese curry and chili oil."
    },
    {
        id: 7,
        name: "Vegan Miso Soup Bulk Pack",
        price: 45.00,
        originalPrice: 50.00,
        rating: 5,
        reviews: 40,
        category: "Miso Soup",
        type: "Multi Set",
        image: "https://yutaka.london/_img/2021/9/1200/vegan-miso-soup-with-toppings-1-serving-350.webp",
        thumbnails: [
            "https://yutaka.london/_img/2021/9/1200/vegan-miso-soup-with-toppings-1-serving-350.webp",
            "https://digitalcontent.api.tesco.com/v2/media/ghs/9fa163e7-08b4-4ae0-aadc-5a790ae9ec54/4479dce5-057d-423e-85de-d14a9e1424db_2065019802.jpeg?h=960&w=960",
            "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/18497418/231428_198333.png"
        ],
        description: "Stock up on your favorite vegan miso soup."
    },
    {
        id: 8,
        name: "Culinary Grade Matcha",
        price: 25.00,
        originalPrice: null,
        rating: 3,
        reviews: 12,
        category: "Instant Matcha",
        type: "Single Pack",
        image: "https://www.tencha.in/cdn/shop/files/CUM50J_-_L1-min.jpg?v=1741344965&width=2048",
        thumbnails: [
            "https://www.tencha.in/cdn/shop/files/CUM50J_-_L1-min.jpg?v=1741344965&width=2048",
            "https://5.imimg.com/data5/SELLER/Default/2024/6/428064731/SC/KH/NF/154736569/culinary-matcha-green-tea-powder-sourced-from-shizouka-japan-50gm-pack-of-1-500x500.jpg",
            "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4488c188653e4e1188695544ca2a812c~tplv-fhlh96nyum-crop-webp:1500:1500.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=948674b7&idc=useast5&from=2378011839"
        ],
        description: "Perfect for baking and making lattes."
    },
     {
        id: 9,
        name: "Japanese Coffee Blend",
        price: 18.00,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        category: "Coffee",
        type: "Single Pack",
        image: "https://homeblendcoffee.com/cdn/shop/files/Home_Blend_Japanese_Matcha_Premium_Grade100g.png?v=1763628811",
        thumbnails: [
            "https://homeblendcoffee.com/cdn/shop/files/Home_Blend_Japanese_Matcha_Premium_Grade100g.png?v=1763628811",
            "https://m.media-amazon.com/images/I/61VZyD28eIL._AC_UF894,1000_QL80_.jpg",
            "https://homeblendcoffee.com/cdn/shop/files/Home_Blend_Japanese_Matcha_Premium_Grade100g.png?v=1763628811"
        ],
        description: "A smooth and rich coffee blend."
    },
    {
        id: 10,
        name: "Gift Card",
        price: 50.00,
        originalPrice: null,
        rating: 5,
        reviews: 5,
        category: "Greeting Card",
        type: "Single Pack",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=300&h=300",
        thumbnails: [
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=300&h=300",
            "https://img.freepik.com/free-vector/flat-design-happy-birthday-cards_23-2149718431.jpg?semt=ais_hybrid&w=740&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXRyPnkoi8XHGQSBNF1mx2xIDJHyJqnbqcw&s"
        ],
        description: "The perfect gift for the food lover."
    },
    {
        id: 11,
        name: "Truffle OKAZU",
        price: 19.99,
        originalPrice: null,
        rating: 5,
        reviews: 45,
        category: "Chili oil,Okazu",
        type: "Single Pack",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/5/20/c82b45ff-4229-4910-a5cb-51abf12179e7_FMCG_FS_LXNS7A7E_1.png",
        thumbnails: [
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/5/20/c82b45ff-4229-4910-a5cb-51abf12179e7_FMCG_FS_LXNS7A7E_1.png",
            "https://trufflesandco.com/wp-content/uploads/2022/03/RTE.png",
            "https://thevegangrocer.com.ph/cdn/shop/products/TartufiJimmyTruffleSauce.jpg?v=1678467708&width=1445"
        ],
        description: "Luxurious truffle infused chili oil."
    },
    {
        id: 12,
        name: "Matcha Whisk Set",
        price: 22.00,
        originalPrice: 28.00,
        rating: 4,
        reviews: 16,
        category: "Coming Soon",
        type: "Multi Set",
        image: "https://m.media-amazon.com/images/I/91I6KXE08vL._AC_UF894,1000_QL80_.jpg",
        thumbnails: [
            "https://m.media-amazon.com/images/I/91I6KXE08vL._AC_UF894,1000_QL80_.jpg",
            "https://image.made-in-china.com/202f0j00dFnVpNJswGYg/Premium-Bamboo-Matcha-Whisk-Set-with-Elegant-Gift-Box.webp",
            "https://m.media-amazon.com/images/I/61iBg3oAhyL._AC_UF894,1000_QL80_.jpg"
        ],
        description: "Traditional bamboo whisk for perfect matcha."
    }
];
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
function updateCartCounter() {
    const counterElements = document.querySelectorAll('.cart-count');
    counterElements.forEach(el => {
        el.textContent = cartCount;
    });
}
function addToCart(event) {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartCounter();
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = "Added!";
    btn.style.backgroundColor = "#214e34";
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = "";
    }, 1000);
}
function getStarsHTML(rating) {
    let stars = '';
    for(let i=1; i<=5; i++) {
        if(i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
});
