
const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function getdata(){

    try{
        let res = await fetch(url);
        let vouchers = await res.json();
       
        append(vouchers[0].vouchers);
        // console.log(vouchers[0].vouchers);
    }catch(err){
        console.log(err);
    }
}
 
getdata();

function append(data){
    let container = document.getElementById("voucher_list");

    data.forEach(function(el,index){
    
        let img = document.createElement("img");
        img.src = el.image;

        let p = document.createElement("p");
        p.innerText = el.name;

        let h3 = document.createElement("h3");
        h3.innerText = el.price;

        let button = document.createElement("btn");
        button.innerText = "BUY"
        button.addEventListener("click",function(){

        buy(index);
        });


        let div = document.createElement("div");
        
        div.append(img,p,h3,button);
        container.append(div);
       
    });
}

var data = JSON.parse(localStorage.getItem("purchase")) || [];
function buy(index){
    
    data.push(data);
    localStorage.setItem("purchase",JSON.stringify();
}





