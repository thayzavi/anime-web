$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

});
// menu lateral

function ToggleEvent (){
    var menu = document.getElementById("menulateral");
    menu.style.display = menu.style.display === "block" ? "none": "block";
}
document.addEventListener("click", function(event){
    var menu = document.getElementById("menulateral");
    var icon = document.getElementById("fa-regular fa-user");
    if (!menu.contains(event.target) && !icon.contains(event.target))menu.style.display = "none";
});

