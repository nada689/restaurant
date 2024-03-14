/*$('#blogCarousel').special-dishes({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }

});*/
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("col");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        if (x[i].className.indexOf(c) > -1) {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}