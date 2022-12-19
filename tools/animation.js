// nhảy ảnh background
var slideImg = document.getElementById("slideImg");
var images = new Array(
    "img/background-1.png",
    "img/bacground-2.webp",
    "img/background-3.jpeg",
    "img/background-4.jpg",
    "img/background-index.jpg"
);
var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 6000);
}


// text type
var typed = new Typed("#type", {
    strings: ["Lamborghini", "Suzuki", "Ferrari", "MayBach"],
    typeSpeed: 210,
    backSpeed: 210,
    loop: true
});

function myFunction() {
    var x = document.getElementById("menu-nav");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

const visitCount =
{
    show: function () {
        var count = Number(localStorage.getItem('visitCount'));
        if (count == null) {
            count = 1;
            localStorage.setItem('visitCount', count);
        }
        else {
            count += 1;
            localStorage.setItem('visitCount', count);
        }
        document.getElementById('visitCount').innerText = count;
    },
    setCount: function (count) {
        localStorage.setItem('visitCount', count);
        document.getElementById('visitCount').innerText = count;
    },
    delete: function () {
        localStorage.removeItem('visitCount');
    }
}
visitCount.show();