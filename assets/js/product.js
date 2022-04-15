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
                "../assetsimg/product/nike/nike1a-gallery.jpg",
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
                "../assetsimg/product/newbalance/nb1a-gallery.jpg",
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


// PRODUCT PAGE
    // Define Selected Product Variables & Constants
    const productRow = document.getElementsByClassName("row");
    const product = document.getElementsByClassName("col-4");


    // Define Filter Constant
const filterBtn = document.getElementById("filter-btn");

    // Add Event Listeners
filterBtn.addEventListener("change", filterProducts);



    // Functions
function filterProducts(e) {
    console.log(e.target.value)
    console.log(productList)

    switch(e.target.value) {
        case "lth": 
            productList.sort((a, b) => a.price - b.price);
            break; 
        case "htl":
            productList.sort((b, a) => a.price - b.price);
            break;
        default: 
            productList.sort((a, b) => a.id - b.id);
            break;
    }

    RenderFilteredProducts();
}
    
function RenderProducts() {
    let productRow;

    productRow = productContainer();

    for(let c=0; c<productList.length; c++) {
        productCard(productRow, c);
    }
}

function productContainer() {
    const productsContainer = document.getElementById("products-box-container");
    // Create Elements Needed to buid container
    const productRow = document.createElement("div");

    // Append newly created elements into the DOM
    productsContainer.appendChild(productRow);

    // Set content and attributes
    productRow.classList.add("row");        // productRow  -->   <div class="row"></div>

    return productRow;
}

function productCard(productRow, count) {
    // Create Elements Needed to buid card
    const productCol = document.createElement("div");   // const productRow = document.createElement("div");
    const productLink = document.createElement("a");
    const productImg = document.createElement("img");
    const productName = document.createElement("h4");
    const productPara = document.createElement("p");

    // Append newly created elements into the DOM
    productRow.appendChild(productCol);     // productCol  -->   <div class="col-4"></div>
    productCol.appendChild(productLink);     // productLink  --> <a>
    productLink.appendChild(productImg);     // <img>
    productCol.appendChild(productName);     // <h4>Product Name</h4>
    productCol.appendChild(productPara);     // <p>RM {Price}</p>

    // Set content and attributes
    productCol.classList.add("col-4");
    productLink.setAttribute("href", `${productList[count].detailPageURL}?id=${productList[count].id}`);
    productImg.setAttribute("src", `${productList[count].images[0]}`);
    productName.innerText = `${productList[count].displayName}`;
    productPara.innerText = `RM${productList[count].price}`;
    
    // productImg.addEventListener("click", ())
}

function RenderFilteredProducts(productList) {
    const productsContainer = document.getElementById("products-box-container");
    // Create Elements Needed to buid container
    const productRow = document.getElementsByClassName("row");
    

    // Remove all child Element in the Product Container
    while(productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.firstChild)
    }

    RenderProducts()

}


RenderProducts();





