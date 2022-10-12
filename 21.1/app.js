function is_legal_age(){
    let userinput = document.querySelector("#userinput");
    let message=document.querySelector("#message");
    
    if(userinput >= 18){
        message.innerHTML="you can drink!";
    }
    else{
        message.innerHTML="you’re too young!";
    }


}