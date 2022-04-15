

let checkoutPrice = JSON.parse(localStorage.getItem("checkout_price"));

let TotalPaymentPrice = checkoutPrice.EstimatedTotal;



paypal.Buttons({
    style: {
      layout: 'vertical',
      color:  'gold',
      shape:  'rect',
      label:  'paypal'
    },
    createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
                value: TotalPaymentPrice
            }
          }]
        });
    },
    onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
  }).render('#paypal');


const SubTotal = document.getElementsByClassName("SubTotal-Price");
const Shipping = document.getElementsByClassName("Shipping-Price");
const EstimatedTotal = document.getElementsByClassName("EsTotal-Price");
let SubTotalQty = checkoutPrice.SubTotal


SubTotal[0].innerText=`RM ${SubTotalQty}.00`
Shipping[0].innerText= `RM 0.00`
EstimatedTotal[0].innerText=`RM ${SubTotalQty + 0}.00`