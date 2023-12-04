async function LoadData() {
   let promise = await fetch('/cart/getAll/productsInCart');
   if (!promise.ok) {
      throw new Error("Cannot load json file");
   } else {
      return await promise.json();
   }
}

window.onload = buttons()




function buttons() {
   var cartButtons = document.getElementsByClassName("button-cart");
   let itemDisplay = document.getElementsByClassName("quantity");
   let display = document.getElementById("quantity_display");
   console.log(itemDisplay)
   for (let i = 0; i < cartButtons.length; i++) {
      cartButtons[i].addEventListener('click', function () {
         for (let pQ of itemDisplay) {
            if (pQ.id == cartButtons[i].id) {
               let q = parseInt(pQ.innerText);
               if (isNaN(q)) {
                  q = 0;
               }
               console.log(q)
               pQ.innerText = ++q
               console.log(pQ.innerText)
            }
         }
         let tq = parseInt(display.innerText);
         display.innerText = ++tq
         //updateTotalQuantity()

      })
   }
}

function updateTotalQuantity() {

   let display = document.getElementById("quantity_display");
   let tq = parseInt(display.innerText);

   if (tq > 0) {
      display.style.visibility = "visible"
   } else {
      display.style.visibility = "hidden"
   }
}