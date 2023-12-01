$(".clickme2").click(function () {
    $(".showlist2").slideToggle();
});

// footer function end
// tabs func start
$(".portfolio-tab").click(function () {
    $("#defaultPortfolio").hide();
});
function openPortfolio(evt, portfolioName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("portfolio-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(portfolioName).style.display = "block";
    evt.currentTarget.className += " active";
}
// tabs func end
$(".logo-tab").click(function () {
    $("#defaultPortfolio2").hide();
});

function openPackage(evt, portfolioName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("logo-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(portfolioName).style.display = "block";
    evt.currentTarget.className += " active";
}

// our pricing func start
$(".tablinks-our-pricing").click(function () {
    $("#defaultPricingPortfolio").hide();
});
function openPrice(evt, planPricing) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks-our-pricing");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(planPricing).style.display = "block";
    evt.currentTarget.className += " active";
}
//  our pricing func end

$(document).ready(function () {
    $(".action-no").attr("href", "tel:+12102123124");
    $(".chat").attr("href", "javascript:void(Tawk_API.toggle())");
    $("#closeIcon").click(function () {
        $("#menu").slideToggle();
    });

    $("#disclaimerCollapse").click(function () {
        $("#disclaimer").slideToggle();
        $("#disclaimerCollapse").toggleClass("disc");
        if ($("#disclaimerCollapse").hasClass("disc")) {
            $("#disclaimer-icons").removeClass("fa-plus-square");
            $("#disclaimer-icons").addClass("fa-minus-square");
        } else {
            $("#disclaimer-icons").addClass("fa-plus-square");
            $("#disclaimer-icons").removeClass("fa-minus-square");
        }
    });

    //Modal
});

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("HeaderSection").style.position = "fixed";
        document.getElementById("HeaderSection").style.background = "#fff";
        document.getElementById("HeaderSection").style.boxShadow =
            "0 6px 14px 0 #cbcbcb66";
        document
            .getElementById("HeaderSection")
            .setAttribute("class", "customHeader navlinksblack");
        document.getElementsByClassName("nav-link")[0].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[1].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[2].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[3].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[4].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[5].style.textShadow =
            "none";
        document.getElementsByClassName("nav-link")[6].style.textShadow =
            "none";
        document
            .getElementById("whiteLogo")
            .setAttribute("src", "assets/images/site-logo.webp");

        // document.getElementById("nav-bg-clr-1").style.backgroundColor = "white";
    } else {
        document.getElementById("HeaderSection").style.position = "sticky";
        document.getElementById("HeaderSection").style.background =
            "transparent";
        document.getElementById("HeaderSection").style.boxShadow = "none";
        document
            .getElementById("HeaderSection")
            .setAttribute("class", "customHeader");
        document.getElementsByClassName("nav-link")[0].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[1].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[2].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[3].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[4].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[5].style.textShadow =
            "-2px 0px 2px #000";
        document.getElementsByClassName("nav-link")[6].style.textShadow =
            "-2px 0px 2px #000";
        document
            .getElementById("whiteLogo")
            .setAttribute("src", "assets/images/site-logo-whites.webp");
        // document.getElementById("nav-bg-clr-1").style.backgroundColor =
        //   "transparent";
    }
}

window.onload = function () {
    // OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    // $("#exampleModal").modal("show");
}

$(window).on("load", function () {
    if (document.cookie.indexOf("visited=true") == -1) {
        $("#exampleModal").modal("show");
        $("#exampleModal").modal({ show: true });
        var year = 1000 * 60 * 60 * 24 * 3;
        var expires = new Date(new Date().valueOf() + year);
        document.cookie = "visited=true;expires=" + expires.toUTCString();
    } else {
        $("#exampleModal").modal("hide");
    }
});

$(document).ready(function () {
    $("#banner1").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        draggable: false,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner2").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner3").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner4").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner5").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner6").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $("#banner7").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: true,
        cssEase: "ease-in-out",
    });
    $(".screen-block img").css("bottom", "0");
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
    });
});

jQuery(document).ready(function () {
    $(".counter-items").counterUp({
        delay: 15,
        time: 1000,
    });
});

if ($(".industry-portf1").length > 0) {
    var loc = window.location.hash.substr(1);
    if ($(".industry-portf .col-lg-4").hasClass(loc) == true) {
        $("." + loc).fadeIn("slow");
        $("#industryswitch").val(loc);
    } else {
        $(".industry-portf .col-lg-4").fadeIn("slow");
    }
    $(function () {
        $("#industryswitch").change(function () {
            $(".industry-portf .col-lg-4").fadeOut("fast");
            $("." + $(this).val()).fadeIn("slow");
        });
    });
}
