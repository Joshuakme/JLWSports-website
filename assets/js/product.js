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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
    },
]
let filteredProductList;



// Define Filter Constant
const filterBtn = document.getElementById("filter-btn");

// Add Event Listeners
filterBtn.addEventListener("change", filterProducts);


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
    let count = 0;

    let rowLength;
    if(productList.length % 4 === 0) {
        rowLength = productList.length / 4;
    } else if(productList.length % 4 != 0) {
        rowLength = Math.ceil(productList.length / 4);
        console.log(rowLength)
    }

    for(let r=0; r<rowLength; r++) {
        let productRow;
        productRow = productContainer(r);     
    
        for(let c=0; c<4; c++) {
            if(count === productList.length || c === 4) {
                break;
            } else {
                count = productCard(productRow, count);
            }
        }
    }
}

function productContainer(r) {
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
    console.log("Hi")
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
    productLink.setAttribute("href", `../product/detail.html`);
    productImg.setAttribute("src", `${productList[count].images[0]}`);
    productName.innerText = `${productList[count].displayName}`;
    productPara.innerText = `RM${productList[count].price}`;
    
    // productImg.addEventListener("click", ())
    count++;
    return count;
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










// var productImg = document.getElementById("productImg")
// var productViewImg = document.getElementsByClassName("product-view-img")

// productViewImg[0].onclick = function()
// {
//     productImg.src = productViewImg [0].src;
// }
// productViewImg[1].onclick = function()
// {
//     productImg.src = productViewImg [1].src;
// }
// productViewImg[2].onclick = function()
// {
//     productImg.src = productViewImg [2].src;
// }
// productViewImg[3].onclick = function()
// {
//     productImg.src = productViewImg [3].src;
// }
