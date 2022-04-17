// Define Products Attribute
const ukSize = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];
const clothingSize = ["XS", "S", "M", "L", "XL", "XXL"];

// Define Products
const productList = [
    {
        id: 1,
        name: "Nike City Rep TR",
        displayName: "Nike City Rep",
        type: "footwear",
        brand: "Nike",
        price: 225.00,
        size: ukSize,
        quantity: 30,
        images: ["../assets/img/product/nike/nike1a.jpg", 
                "../assets/img/product/nike/nike1a-gallery.jpg",
                "../assets/img/product/nike/nike1b.jpg", 
                "../assets/img/product/nike/nike1b-gallery.jpg",
                "../assets/img/product/nike/nike1c.jpg", 
                "../assets/img/product/nike/nike1c-gallery.jpg",
                "../assets/img/product/nike/nike1d.jpg", 
                "../assets/img/product/nike/nike1d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike1-detail.html"
    },
    {
        id: 2,
        name: "New Balance 5740 Women's",
        displayName: "New Balance 5740 Women's",
        type: "footwear",
        brand: "New Balance",
        price: 519.00,
        size: ukSize,
        quantity: 50,
        images: ["../assets/img/product/newbalance/nb1a.jpg", 
                "../assets/img/product/newbalance/nb1a-gallery.jpg",
                "../assets/img/product/newbalance/nb1b.jpg", 
                "../assets/img/product/newbalance/nb1b-gallery.jpg",
                "../assets/img/product/newbalance/nb1c.jpg", 
                "../assets/img/product/newbalance/nb1c-gallery.jpg",
                "../assets/img/product/newbalance/nb1d.jpg", 
                "../assets/img/product/newbalance/nb1d-gallery.jpg",
                ],
        detailPageURL: "./detail/nb1-detail.html"
    },
    {
        id: 3,
        name: "Black Nike T-shirt",
        displayName: "Black Nike T-shirt",
        type: "clothing",
        brand: "Nike",
        price: 50.00,
        size: clothingSize,
        quantity: 33,
        images: ["../assets/img/product/nike/nike2a.jpg", 
                "../assets/img/product/nike/nike2a-gallery.jpg",
                "../assets/img/product/nike/nike2b.jpg", 
                "../assets/img/product/nike/nike2b-gallery.jpg",
                "../assets/img/product/nike/nike2c.jpg", 
                "../assets/img/product/nike/nike2c-gallery.jpg",
                "../assets/img/product/nike/nike2d.jpg", 
                "../assets/img/product/nike/nike2d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike2-detail.html"
    },
    {
        id: 4,
        name: "High Shine High Waisted 7/8 Women's Running Leggings",
        displayName: "Women's Running Leggings",
        type: "clothing",
        brand: "Puma",
        price: 149.00,
        size: clothingSize,
        quantity: 50,
        images: ["../assets/img/product/puma/puma1a.jpg", 
                "../assets/img/product/puma/puma1a-gallery.jpg",
                "../assets/img/product/puma/puma1b.jpg", 
                "../assets/img/product/puma/puma1b-gallery.jpg",
                "../assets/img/product/puma/puma1c.jpg", 
                "../assets/img/product/puma/puma1c-gallery.jpg",
                "../assets/img/product/puma/puma1d.jpg", 
                "../assets/img/product/puma/puma1d-gallery.jpg",
                ],
        detailPageURL: "./detail/puma1-detail.html"
    },
    {
        id: 5,
        name: "Woman's Tank",
        displayName: "Woman's Tank",
        type: "clothing",
        brand: "Nike",
        price: 129.00,
        size: clothingSize,
        quantity: 50,
        images: ["../assets/img/product/nike/nike3a.jpg", 
                "../assets/img/product/nike/nike3a-gallery.jpg",
                "../assets/img/product/nike/nike3b.jpg", 
                "../assets/img/product/nike/nike3b-gallery.jpg",
                "../assets/img/product/nike/nike3c.jpg", 
                "../assets/img/product/nike/nike3c-gallery.jpg",
                "../assets/img/product/nike/nike3d.jpg", 
                "../assets/img/product/nike/nike3d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike3-detail.html"
    },
    {
        id: 6,
        name: "Nike Air Men's Trousers",
        displayName: "Nike Air Men's Trousers",
        type: "clothing",
        brand: "Nike",
        price: 299.00,
        size: clothingSize,
        quantity: 50,
        images: ["../assets/img/product/nike/nike4a.jpg", 
                "../assets/img/product/nike/nike4a-gallery.jpg",
                "../assets/img/product/nike/nike4b.jpg", 
                "../assets/img/product/nike/nike4b-gallery.jpg",
                "../assets/img/product/nike/nike4c.jpg", 
                "../assets/img/product/nike/nike4c-gallery.jpg",
                "../assets/img/product/nike/nike4d.jpg", 
                "../assets/img/product/nike/nike4d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike4-detail.html"
    },
    {
        id: 7,
        name: "Aeon Rewind Women's Trainers",
        displayName: "Aeon Rewind Trainers (W)",
        type: "footwear",
        brand: "Puma",
        price: 209.00,
        size: ukSize,
        quantity: 50,
        images: ["../assets/img/product/puma/puma2a.jpg", 
                "../assets/img/product/puma/puma2a-gallery.jpg",
                "../assets/img/product/puma/puma2b.jpg", 
                "../assets/img/product/puma/puma2b-gallery.jpg",
                "../assets/img/product/puma/puma2c.jpg", 
                "../assets/img/product/puma/puma2c-gallery.jpg",
                "../assets/img/product/puma/puma2d.jpg", 
                "../assets/img/product/puma/puma2d-gallery.jpg",
                ],
        detailPageURL: "./detail/puma2-detail.html"
    },
    {
        id: 8,
        name: "Evostripe Women's Tee",
        displayName: "Evostripe Women's Tee",
        type: "clothing",
        brand: "Puma",
        price: 59.00,
        size: ukSize,
        quantity: 50,
        images: ["../assets/img/product/puma/puma3a.jpg", 
                "../assets/img/product/puma/puma3a-gallery.jpg",
                "../assets/img/product/puma/puma3b.jpg", 
                "../assets/img/product/puma/puma3b-gallery.jpg",
                "../assets/img/product/puma/puma3c.jpg", 
                "../assets/img/product/puma/puma3c-gallery.jpg",
                "../assets/img/product/puma/puma3d.jpg", 
                "../assets/img/product/puma/puma3d-gallery.jpg",
                ],
        detailPageURL: "./detail/puma3-detail.html"
    },
    {
        id: 9,
        name: "Nike ZoomX Invincible Run Flyknit 2",
        displayName: "Nike ZoomX Flyknit 2",
        type: "footwear",
        brand: "Nike",
        price: 779.00,
        size: ukSize,
        quantity: 50,
        images: ["../assets/img/product/nike/nike6a.jpg", 
                "../assets/img/product/nike/nike6a-gallery.jpg",
                "../assets/img/product/nike/nike6b.jpg", 
                "../assets/img/product/nike/nike6b-gallery.jpg",
                "../assets/img/product/nike/nike6c.jpg", 
                "../assets/img/product/nike/nike6c-gallery.jpg",
                "../assets/img/product/nike/nike6d.jpg", 
                "../assets/img/product/nike/nike6d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike6-detail.html"
    },
    {
        id: 10,
        name: "Nike Revolution 6 Next Nature",
        displayName: "Nike Revolution Next Nature",
        type: "clothing",
        brand: "Nike",
        price: 225.00,
        size: clothingSize,
        quantity: 50,
        images: ["../assets/img/product/nike/nike5a.jpg", 
                "../assets/img/product/nike/nike5a-gallery.jpg",
                "../assets/img/product/nike/nike5b.jpg", 
                "../assets/img/product/nike/nike5b-gallery.jpg",
                "../assets/img/product/nike/nike5c.jpg", 
                "../assets/img/product/nike/nike5c-gallery.jpg",
                "../assets/img/product/nike/nike5d.jpg", 
                "../assets/img/product/nike/nike5d-gallery.jpg",
                ],
        detailPageURL: "./detail/nike5-detail.html"
    },
    {
        id: 11,
        name: `Ignite 3" Women's Shorts`,
        displayName: `Ignite 3" Women's Shorts`,
        type: "clothing",
        brand: "Nike",
        price: 69.00,
        size: clothingSize,
        quantity: 50,
        images: ["../assets/img/product/puma/puma5a.jpg", 
                "../assets/img/product/puma/puma5a-gallery.jpg",
                "../assets/img/product/puma/puma5b.jpg", 
                "../assets/img/product/puma/puma5b-gallery.jpg",
                "../assets/img/product/puma/puma5c.jpg", 
                "../assets/img/product/puma/puma5c-gallery.jpg",
                "../assets/img/product/puma/puma5d.jpg", 
                "../assets/img/product/puma/puma5d-gallery.jpg",
                ],
        detailPageURL: "./detail/puma5-detail.html"
    },
    {
        id: 12,
        name: "HYBRID NX Men's Running Shoes",
        displayName: "HYBRID NX Running Shoes",
        type: "footwear",
        brand: "Puma",
        price: 255.00,
        size: ukSize,
        quantity: 50,
        images: ["../assets/img/product/puma/puma4a.jpg", 
                "../assets/img/product/puma/puma4a-gallery.jpg",
                "../assets/img/product/puma/puma4b.jpg", 
                "../assets/img/product/puma/puma4b-gallery.jpg",
                "../assets/img/product/puma/puma4c.jpg", 
                "../assets/img/product/puma/puma4c-gallery.jpg",
                "../assets/img/product/puma/puma4d.jpg", 
                "../assets/img/product/puma/puma4d-gallery.jpg",
                ],
        detailPageURL: "./detail/puma4-detail.html"
    },
]


let selectedId;
let selectedProduct;
let selectedProductName;
let selectedSize;
let selectedQty;


const params = new URLSearchParams(window.location.search);
if(params.has("id")) {
    let id;
    id = parseInt(params.get("id"));
    if(id >= 1 && id <= 12) {
        selectedId = parseInt(params.get("id"));
    } else {
        alert("404 Error!!! Product not Found");
        location.href = "/product/product.html";
    }
} else {

}

// Get the selected product ID
for(let i=0; i<productList.length; i++) {
    if(productList[i].id === selectedId) {
        selectedProduct = productList[i];
        selectedProductName = selectedProduct.name;
    }
}


// Setting Page Title
document.title = selectedProductName + " | JLWSports Malaysia";


const activeImage = document.getElementById("productImg");
const galleryImgList = document.getElementsByClassName("product-view-img");
let galleryImgIndex = 1;
let ImgIndex;





activeImage.setAttribute("src", selectedProduct.images[0]);

for(let i=0; i<4; i++) {
    galleryImgList[i].setAttribute("src", selectedProduct.images[galleryImgIndex]);
    galleryImgIndex += 2;
}


// Saving Value Part
const productImg = document.getElementById("productImg");
const productViewImg = document.getElementsByClassName("product-view-img");
const addToCartButton = document.getElementsByClassName("add-to-cart-btn");
const sizeSelect = document.getElementById("product-size-choice");
const qtySelect = document.getElementById("product-qty-choice");

qtySelect.setAttribute("min", "0");
qtySelect.setAttribute("max", `${selectedProduct.quantity}`);

sizeSelect.addEventListener("change", (e) => {
    selectedSize = e.target.value;
})

selectedQty = qtySelect.value;
qtySelect.addEventListener("change", (e) => {
    selectedQty = e.target.value;
})

addToCartButton[0].addEventListener("click", () => {
    if(selectedId != undefined && selectedId != "" && selectedSize != undefined && selectedSize != "default" && selectedSize != "" && (selectedQty >= 0 && selectedQty <= selectedProduct.quantity)) {
        localStorage.setItem("selected_product", JSON.stringify({id: selectedId, size: selectedSize, qty: selectedQty}));
        alert(`You have added to cart!!! Please checkout there...`);
    } else {
        alert("Plese fill in the field!!!")
    }
})




productViewImg[0].onclick = function()
{
    productImg.src = productViewImg [0].src;
}
productViewImg[1].onclick = function()
{
    productImg.src = productViewImg [1].src;
}
productViewImg[2].onclick = function()
{
    productImg.src = productViewImg [2].src;
}
productViewImg[3].onclick = function()
{
    productImg.src = productViewImg [3].src;
}


const selectionContainer = document.getElementById("selection");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const selectElement = document.createElement("select");
const optionElement = document.createElement("option");

productName.innerText = selectedProduct.name;
productPrice.innerText = `RM${selectedProduct.price}.00`;

selectionContainer.appendChild(selectElement);
selectElement.id = "product-size-choice";

// You May Like Part

const col4List = document.getElementsByClassName("col-4");
console.log(col4List)
for(let i=0; i<col4List.length; i++) {
    addRecommendProduct(i);
}

function addRecommendProduct(i) {
    let filteredProductList;

    filteredProductList = productList.filter((product) => (
        product.type === selectedProduct.type
    ))

    console.log(filteredProductList)

    let index = Math.floor(Math.random() * filteredProductList.length);

    // Add Image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", `${filteredProductList[index].images[0]}`)
    col4List[i].appendChild(productImg);

    // Add Product Name
    const productName = document.createElement("h4");
    productName.innerText = `${filteredProductList[index].name}`;
    col4List[i].appendChild(productName);

    // Add Product Price
    const productPrice = document.createElement("p");
    productPrice.innerText = `${filteredProductList[index].price}`;
    col4List[i].appendChild(productPrice);
}

