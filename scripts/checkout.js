

document.querySelector("#confirm").addEventListener("click",myFunction)
let i=0

function myFunction()
{   
  
  setTimeout(function(){
   
    if(i==0)
    {
      alert("Your Order is accepted")
    }
    
    if(i==3)
    {
      alert(" Your order is being Prepared ")
    }

   if(i==8)
    {
      alert("Your order is being packed  ")
    }

    if(i==10)
    {
      alert("Your order is out for delivery ")
    }

    if(i==12)
    {
      alert("Order delivered ")
    }
   i=i+1
  },100)
}

