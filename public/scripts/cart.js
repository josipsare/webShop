function updateTotalQuantity() {

   let totalQuantity = document.getElementById('quantity_display');
   console.log(totalQuantity)
   let prazno = document.getElementById("items_cart");
   if (totalQuantity.innerText == "0") {
      prazno.innerHTML = `<p class="prazna_kosarica">Kosarica je prazna</p>`
   }

}


function buttons() {
   let productQuantity = document.getElementsByClassName("cart-kolicina");
   let totalq = document.getElementById('quantity_display');
   let plus = document.getElementsByClassName("cart-plus-button");
   let minus = document.getElementsByClassName("cart-minus-button");
   for (let j = 0; j < plus.length; j++) {
      plus[j].addEventListener('click', function () {
         console.log("siskam")
         for (let pQ of productQuantity) {
            if (pQ.id == plus[j].id) {
               let q = parseInt(pQ.innerText);
               console.log(q)
               pQ.innerText = ++q
               console.log(pQ.innerText)
            }
         }
         let tq = parseInt(totalq.innerText);
         totalq.innerText = ++tq
      })
   }
   for (let j = 0; j < minus.length; j++) {
      minus[j].addEventListener('click', function () {
         console.log("siskam")
         for (let pQ of productQuantity) {
            if (pQ.id == minus[j].id) {
               let q = parseInt(pQ.innerText);
               if (q > 0) {
                  console.log(q)
                  pQ.innerText = --q
                  console.log(pQ.innerText)
                  let tq = parseInt(totalq.innerText);
                  totalq.innerText = --tq
               }
            }
         }
      })
   }
}
buttons();
updateTotalQuantity();
let logo = document.getElementsByClassName("logotip-botun");
logo[0].addEventListener('click', function () {})