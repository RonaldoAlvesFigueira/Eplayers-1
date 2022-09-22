$(document).ready(function(){

   
    $(".card-buy").click(function(){
        alert("Ops, produto Indisponível, sorry :(");

        $(this).text("Indisponível");
    });

});



function exibeMenu() {
    
    let navbar = document.getElementById('menu');
    navbar.classList.toggle("showNavbar");
}