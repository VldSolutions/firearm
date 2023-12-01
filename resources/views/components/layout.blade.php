<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@yield('title') - Fire Arms</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap" rel="stylesheet">
    <!-- <link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"> -->

    <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png" />
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />

    <link rel="stylesheet" href="/assets/css/headers.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
        type="text/css" media="screen" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="/assets/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="/assets/owlcarousel/owl.theme.default.min.css">
</head>

<body>

    <!-- <header class="customHeader innerPage" id="HeaderSection">
        <div class="container">
            <div class="row mx-auto">
                <div class="col-md-4">
                    <div class="main-section">
                        <a class="themebtn" href="http://">MENU</a>
                        <a class="themebtn" href="http://">LOGIN</a>
                    </div>
                </div>
                <div class="col-md-4">

                </div>

                <div class="col-md-4">
                    <div class="main-section">
                        <a class="themebtn" href="http://">JOIN US</a>
                        <a class="themebtn" href="http://">CONTACT US</a>
                    </div>
                </div>



            </div>
        </div>
    </header> -->

    <!-- <header class="customHeader" id="HeaderSection">
        <div class="">
            <div class="">
                <div class="row mx-auto">

                    <div class="col-md-12 col-sm-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container desktopnav">
                                <a class="navbar-brand" href="/"><img src="/assets/images/logo.png" /></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse d-block" id="navbarNavDropdown">
                                    <ul class="navbar-nav justify-content-end align-items-center">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="/about-us">About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/learn-more">Learn More</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/faqs">FAQ's</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/properties">Search Properties</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/members">Members</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contact-us">Contact Us</a>
                                        </li>


                                        <li class="nav-item nav-button">
                                            <a class="nav-link" href="javascript:;">Login</a>
                                        </li>
                                        <li class="nav-item nav-button signup">
                                            <a class="nav-link" href="javascript:;">Signup</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="hamburger-menu" id="small-screen-nav">
                                <div class="logo-mob">
                                    <a href="/"><img src="/assets/images/logo.png" loading="lazy" /></a>
                                </div>
                                <input id="menu__toggle" type="checkbox" />
                                <label class="menu__btn" for="menu__toggle">
                                    <span></span>
                                </label>
                                <ul id="menu" class="menu__box">
                                    <div class="logo-m">
                                        <a href="/"><img src="/assets/images/logowhite.png" loading="lazy" /></a>
                                        <span id="closeIcon"><i class="fas fa-times"></i></span>
                                    </div>
                                    <li><a class="menu__item" href="/">Home</a></li>
                                    <li><a class="menu__item" href="/about-us">About Us</a></li>
                                    <li><a class="menu__item" href="/learn-more">Learn More</a></li>
                                    <li><a class="menu__item" href="/contact-us">FAQ's</a></li>
                                    <li><a class="menu__item" href="/properties">Search Properties</a></li>
                                    <li><a class="menu__item" href="/members">Members</a></li>
                                    <li><a class="menu__item" href="/contact-us">Contact Us</a></li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header> -->

    <!-- hamburger -->


    <header>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="icon-section">
                                <a href="http://">
                                    <i class="fas fa-pencil-alt"></i>
                                    List
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="icon-section">
                                <a href="http://">
                                    <i class="fas fa-search"></i>
                                    <!-- <h3></h3> -->
                                    Search
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="icon-section">
                                <a href="http://">
                                    <i class="fas fa-hand-pointer"></i>
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-1">
                    <input type="checkbox" id="navi-toggle" class="checkbox" />
                    <label for="navi-toggle" class="buttonHamburger">
                        <span class="iconHamburger">&nbsp;</span>
                    </label>
                    <div class="backgroundHamburger">&nbsp;</div>

                    <!-- nav -->
                    <nav class="navHamburger">
                        <ul class="listHamburger">
                            <li> <a href="/"> Home </a> </li>
                            <li> <a href="/classifieds"> Classifieds </a> </li>
                            <li> <a href="/trigger-talk"> Trigger Talk </a> </li>
                            <li> <a href="/trigger-show"> Trigger Show </a> </li>
                            <li> <a href="/news"> News </a> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    @yield('content')

    <footer>
        <div class="container">
            <div class="row mx-auto">
                <div class="col-md-12">
                    <div class="text-center">
                        <img src="/assets/images/logo.png" alt="" srcset="">
                    </div>
                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-md-2">

                </div>

                <div class="col-md-8">
                    <div class="text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Nam atque labore consequatur sequ
                            ipsa quidem quo doloremque minus</p>
                    </div>
                </div>

                <div class="col-md-2">

                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-md-2"></div>
                <div class="col-md-2">
                    <div>
                        <a href="" class="themebtn">CONTACT US</a>
                    </div>
                </div>
                <div class="col-md-2">
                    <div>
                        <a href="" class="themebtn">CONTACT US</a>
                    </div>
                </div>
                <div class="col-md-2">
                    <div>
                        <a href="" class="themebtn">CONTACT US</a>
                    </div>
                </div>
                <div class="col-md-2">
                    <div>
                        <a href="" class="themebtn">CONTACT US</a>
                    </div>
                </div>

                <div class="col-md-2"></div>

            </div>


        </div>
    </footer>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="/assets/owlcarousel/owl.carousel.min.js"></script>
    <script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        AOS.init();
    </script>
    <script>

        $(document).ready(function () {
            var owl = $('.owl-carousel');
            var ourServices = $('.our-services');
            var testimonials = $('.testimonials');
            var iconsSection = $('.iconsSection');
            var blogsone = $('.blogsone');
            var blogstwo = $('.blogstwo');
            var blogsthree = $('.blogsthree');
            // owl.owlCarousel({
            //     loop: true,
            // });
            // owl.on('mousewheel', '.owl-stage', function (e) {
            //     if (e.deltaY > 0) {
            //         owl.trigger('next.owl');
            //     } else {
            //         owl.trigger('prev.owl');
            //     }
            //     e.preventDefault();
            // });

            iconsSection.owlCarousel({
                loop: true,
                nav: true,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                margin: 20,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });

            blogsone.owlCarousel({
                loop: true,
                nav: true,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                margin: 20,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });

            blogstwo.owlCarousel({
                loop: true,
                nav: true,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                margin: 20,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });

            blogsthree.owlCarousel({
                loop: true,
                nav: true,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                margin: 20,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });

            ourServices.owlCarousel({
                items: 2,
                loop: true,
                nav: true,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                margin: 40,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });

            testimonials.owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                autoplay: false,
                center: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
            // ourServices.on('mousewheel', '.owl-stage', function (e) {
            //     if (e.deltaY > 0) {
            //         ourServices.trigger('next.owl');
            //     } else {
            //         ourServices.trigger('prev.owl');
            //     }
            //     e.preventDefault();
            // });
        });
    </script>
</body>

</html>