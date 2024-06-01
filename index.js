function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let checkin = document.getElementById("check-in").value;
    let checkout = document.getElementById("check-out").value;
    let guests = document.getElementById("guests").value;
    if(guests<1){
        document.getElementById("errorguests").innerHTML = "Guests must be atleast 1 person(s)";
    }else{
        document.getElementById("errorguests").innerHTML = ""
    }
    if(name.length < 3){
        document.getElementById("errorname").innerHTML = "Name must be at least 3 letter!";
    }else{
        document.getElementById("errorname").innerHTML = "";
    }
    if(email.endsWith("@gmail.com")==false && email.endsWith("@outlook.com")==false && email.endsWith("@hotmail.com")==false && email.endsWith("@yahoo.com")==false){
        document.getElementById("erroremail").innerHTML = "Email not supported! Supported email: @gmail.com, @outlook.com, @hotmail.com, @yahoo.com";
    }else{
        document.getElementById("erroremail").innerHTML = "";
    }
    let checkinDate = new Date(checkin);
    let checkoutDate = new Date(checkout);
    if(!checkin){
        document.getElementById("errorcheckin").innerHTML = "Select check-in date!";
    }else if(checkinDate < new Date()){
        document.getElementById("errorcheckin").innerHTML = "Check in date must be more than current date!";
    }else if(checkinDate >= new Date()){
        document.getElementById("errorcheckin").innerHTML = "";
    }

    if(!checkout){
        document.getElementById("errorcheckout").innerHTML = "Select check-out date!";
    }else if(!checkin || checkinDate < new Date()){
        document.getElementById("errorcheckout").innerHTML = "Check-in date invalid!";
    }else if(checkoutDate < checkinDate){
        document.getElementById("errorcheckout").innerHTML = "Check out date must be more than check in date!";
    }else if(checkoutDate >= checkinDate){
        document.getElementById("errorcheckout").innerHTML = "";
    }
}

function changePrice(){
    let suite = document.getElementById("suite").value;
    if(suite == "king"){
        document.getElementById("price").innerHTML = "Total Price: Rp 7.699.000,00-";
    }else if(suite == "twin"){
        document.getElementById("price").innerHTML = "Total Price: Rp 6.999.000,00-";
    }else if(suite == "vholux"){
        document.getElementById("price").innerHTML = "Total Price: Rp 17.399.000,00-";
    }else{
        document.getElementById("price").innerHTML = "Total Price: Rp 7.699.000,00-";
    }
}

function dropdown() {
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " dropdown";
    } else {
      x.className = "navbar";
    }
  }