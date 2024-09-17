count = 0

function showMenu(){
    if(count == 0){
        document.getElementById("mobile-items").style.display = "block";
        count +=1;
    } else {
        document.getElementById("mobile-items").style.display = "none";
        count -=1
    }
    
    
}