function sub(){

    let data = JSON.parse(localStorage.getItem("user")) || {};

    event.preventDefault();
    let form = document.getElementById("form");

    let userData ={

        Name : form.name.value,
        Email : form.email.value,
        Address : form.address.value,
        Amount : form.amount.value
    };


    data.push(userData);

    localStorage.setItem("user",JSON.stringify(data));
    

}