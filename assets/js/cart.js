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

let selectedProductList;
let cartselectedProduct = getSelectedProduct()

function getSelectedProduct() {

    selectedProductList = JSON.parse(localStorage.getItem("selected_product"))
    console.log(selectedProductList)
    for(let i=0;i<productList.length;i++){
        if (productList[i].id===selectedProductList.id){
            return productList[i]
        }   
    }
}

// Cart Product Image
const cartContainer=document.getElementsByClassName("cart-product")
const productImage=document.createElement("img")

cartContainer[0].appendChild(productImage)
productImage.setAttribute("src", cartselectedProduct.images[0])

// Cart Product Name
const cartDetailElement=document.createElement("div")
const CartDetailLeftElement=document.createElement("div")
const productNameElement=document.createElement("h1")

cartContainer[0].appendChild(cartDetailElement)
cartDetailElement.classList.add("CartDetail")

cartDetailElement.appendChild(CartDetailLeftElement)
CartDetailLeftElement.classList.add("CartDetail-Left")

CartDetailLeftElement.appendChild(productNameElement)
productNameElement.classList.add("ProductName")
productNameElement.innerText = `${cartselectedProduct.name}`

// Cart Product Size
const CartProductSize=document.createElement("p")
CartDetailLeftElement.appendChild(CartProductSize)
CartProductSize.innerText = `Size: ${selectedProductList.size}`

// Cart Product Quantity
const ProductQuantity=document.createElement("input")
CartDetailLeftElement.appendChild(ProductQuantity)
ProductQuantity.setAttribute("type", "number")
ProductQuantity.setAttribute("value", `${selectedProductList.qty}`)
ProductQuantity.setAttribute("min", "1")
ProductQuantity.setAttribute("max", `${cartselectedProduct.quantity}`)

ProductQuantity.addEventListener("change", (e) => {
    localStorage.removeItem("selected_product")
    localStorage.setItem("selected_product", JSON.stringify({id: selectedProductList.id, size: selectedProductList.size, qty: e.target.value}));
    location.reload()
})
let updatedSelectedProduct=getSelectedProduct()

// Delete Button
const DeleteButton=document.createElement("button")
CartDetailLeftElement.appendChild(DeleteButton)
DeleteButton.classList.add("deletebutton")
const DeleteIcon=document.createElement("i")
DeleteButton.appendChild(DeleteIcon)

DeleteIcon.classList.add("fa-solid")
DeleteIcon.classList.add("fa-trash")
DeleteIcon.addEventListener("click", () => {
    localStorage.removeItem("selected_product")
    location.reload()
})

// Cart Detail Right
const CartDetailRight=document.createElement("div")
CartDetailRight.classList.add("OriPrice")
cartDetailElement.appendChild(CartDetailRight)

const ProductPrice=document.createElement("p")
CartDetailRight.appendChild(ProductPrice)
ProductPrice.innerText = `RM ${cartselectedProduct.price}.00`

// Cart- Checkout
const SubTotal=document.getElementsByClassName("SubTotal-Price")
const Shipping=document.getElementsByClassName("Shipping-Price")
const EstimatedTotal=document.getElementsByClassName("EsTotal-Price")
let SubTotalQty=updatedSelectedProduct.price * selectedProductList.qty

SubTotal[0].innerText=`RM ${SubTotalQty}.00`
Shipping[0].innerText= `RM 0.00`
EstimatedTotal[0].innerText=`RM ${SubTotalQty + 0}.00`

//Checkout Button
const checkoutBtn=document.getElementsByClassName("check")
checkoutBtn[0].setAttribute("href", `checkout.html?id=${cartselectedProduct.id}`)
checkoutBtn[0].addEventListener("click", () => {
    localStorage.setItem("checkout_price", JSON.stringify({SubTotal: SubTotalQty, Shipping: 0, EstimatedTotal: SubTotalQty + 0}))
})


