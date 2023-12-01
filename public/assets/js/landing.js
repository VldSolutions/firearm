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

window.onscroll = function () {
    Landingscroll();
};

function Landingscroll() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("LandingSection").style.position = "fixed";
        document.getElementById("LandingSection").style.background = "#fff";
        document.getElementById("LandingSection").style.boxShadow =
            "0 6px 14px 0 #cbcbcb66";
        document
            .getElementById("LandingSection")
            .setAttribute("class", "customHeader navlinksblack");
        document
            .getElementById("whiteLogo")
            .setAttribute("src", "assets/images/site-logo.webp");

        // document.getElementById("nav-bg-clr-1").style.backgroundColor = "white";
    } else {
        document.getElementById("LandingSection").style.position = "sticky";
        document.getElementById("LandingSection").style.background =
            "transparent";
        document.getElementById("LandingSection").style.boxShadow = "none";
        document
            .getElementById("LandingSection")
            .setAttribute("class", "customHeader");
        document
            .getElementById("whiteLogo")
            .setAttribute("src", "assets/images/site-logo-whites.webp");
        // document.getElementById("nav-bg-clr-1").style.backgroundColor =
        //   "transparent";
    }
}

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
