// On clicking remove button the item should be removed from DOM as well as localstorage.

var coffeeArr=JSON.parse(localStorage.getItem("coffee"));
console.log(coffeeArr)
display(coffeeArr)
add(coffeeArr)
function display(data)
{      
    
   data.forEach(function(el,index){
   
       let card=document.createElement("div");

       let img=document.createElement("img");
       img.src=el.image;

       let tag=document.createElement("h2");
       tag.innerText=el.title;

       let price=document.createElement("h2");
       price.innerText=el.price;

     
     

       let remove=document.createElement("button")
       remove.innerText="DELETE"
       remove.id="remove_coffee";
       remove.addEventListener("click",function(){
         deleteitem(el,index)
       })

       card.append(img,tag,price,remove);
       document.querySelector("#bucket").append(card);
       
   })
}
 

function deleteitem(el,index){
  coffeeArr.splice(index,1);
localStorage.setItem("coffee",JSON.stringify(coffeeArr))
        window.location.reload();
}

function add(data){
  let sum=0;
  data.forEach(function(el){
    sum=sum+el.price
    document.querySelector("#total_amount").append(sum)
  })
}


document.querySelector("#confirm_checkout").addEventListener("click",next)

function next(){
  window.location.href="checkout.html"
}

