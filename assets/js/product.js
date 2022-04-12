var productImg = document.getElementById("productImg")
var productViewImg = document.getElementsByClassName("product-view-img")

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
