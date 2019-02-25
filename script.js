function funkcja(){
    console.log("dziala")
}
function funkcja2(){
    console.log("tez dziala")
    document.body.style.background="black";
    document.getElementById("zdjecie").innerHTML="<p>nie ma zdjecia</p>";
    setTimeout(function(){document.getElementById("zdjecie").innerHTML="<p>...</p>"},2000)

}