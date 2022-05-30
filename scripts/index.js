// Add the coffee to local storage with key "coffee"

       document.querySelector("#bucket").addEventListener("click",change)
       function change(){
         window.location.href="bucket.html"
       }

       
       async function coffee()
       {  

         let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
         let res= await fetch(url);
         let products= await res.json();
         var data = products.menu.data;
       //console.log(data)
          appendProducts(data)
       }
       coffee()
        
var coffeeArr=JSON.parse(localStorage.getItem("coffee")) || [];

let count=coffeeArr.length;
document.querySelector("#coffee_count").append(count);

        function appendProducts(data)
        {   
          data.forEach(function(el){
            //console.log(el)
            let card=document.createElement("div");

            let tag=document.createElement("h2");
            tag.innerText=el.title;

            let img=document.createElement("img");
            img.src=el.image;

            let price=document.createElement("h2");
            price.innerText=el.price;
            
            // let count=document.createElement("h2")
            // count.innerText=coffeeArr.length;

            let button =document.createElement("button");
            button.innerText="Add to Bucket";
            button.id="add_to_bucket";
            button.addEventListener("click",function(){
              myFunc(el)
            })

           
            
          // document.querySelector("#coffee_count").append(count);

          card.append(img,tag,price,button)
          document.querySelector("#menu").append(card)

          })

      
        }
         
        function myFunc(el)
            {   
              coffeeArr.push(el);
              localStorage.setItem("coffee",JSON.stringify(coffeeArr));
            } 
        

