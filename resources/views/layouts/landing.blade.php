<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <!--begin::Head-->
    <head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="ZZMTech, Technology Solution craft for Industries and SMEs.">
        <meta name="keywords" content="zzmtech, development, web">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta property="og:locale" content="en_US">
        <meta property="og:type" content="article">
        <meta property="og:title" content="ZZMTech">
        <meta property="og:url" content="">
        <meta property="og:site_name" content="ZZMTech">
        <meta name="application-name" content="ZZMTech">

        <title inertia>{{ config('app.name', 'ZZMTech') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        
        <!-- Vendor Stylesheet -->
        <link rel="stylesheet" href="/assets/abstract/css/vendor/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/font-awesome.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick-theme.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/sal.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/magnific-popup.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/green-audio-player.min.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/odometer-theme-default.css">

        <!-- Site Stylesheet -->
        <link rel="stylesheet" href="/assets/abstract/css/app.css">
        <link rel="stylesheet" href="/assets/abstract/css/custom.css">

        {{-- @livewireStyles --}}
        @laravelPWA
    </head>
    <!--end::Head-->

    <!--begin::Body-->
	<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled active-dark-mode">


        <div class="font-sans text-gray-900 antialiased">


             <!-- Page Content -->
      

            <!--[if lte IE 9]>
             <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
             <![endif]-->
             <a href="#main-wrapper" id="backto-top" class="back-to-top">
                 <i class="far fa-angle-double-up"></i>
             </a>

             <!-- Preloader Start Here -->
             <div id="preloader"></div>
             <!-- Preloader End Here -->

             <div class="my_switcher d-none d-lg-block">
                 <ul>
                     <li title="Light Mode">
                         <a href="javascript:void(0)" class="setColor light" data-theme="light">
                             <i class="fal fa-lightbulb-on"></i>
                         </a>
                     </li>
                     <li title="Dark Mode">
                         <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
                             <i class="fas fa-moon"></i>
                         </a>
                     </li>
                 </ul>
             </div>

             <div id="main-wrapper" class="main-wrapper">

                 <!--=====================================-->
                 <!--=        Header Area Start       	=-->
                 <!--=====================================-->
                 <header class="header axil-header header-style-1">
                     <div id="axil-sticky-placeholder"></div>
                     <div class="axil-mainmenu">
                         <div class="container">
                             <div class="header-navbar">
                                 <div class="header-logo">
                                     <a href="/"><img class="light-version-logo" src="/assets/logo/zzmtech_logo.png" alt="logo" style="width:200px"></a>
                                     <a href="/"><img class="dark-version-logo" src="/assets/logo/zzmtech_logo.png" alt="logo" style="width:200px"></a>
                                     <a href="/"><img class="sticky-logo" src="/assets/logo/zzmtech_logo.png" alt="logo" style="width:200px"></a>
                                 </div>
                                 <div class="header-main-nav">
                                     <!-- Start Mainmanu Nav -->
                                     <nav class="mainmenu-nav" id="mobilemenu-popup">
                                         <div class="d-block d-lg-none">
                                             <div class="mobile-nav-header">
                                                 <div class="mobile-nav-logo">
                                                     <a href="/">
                                                         <img class="light-mode" src="/assets/logo/zzmtech_logo.png" alt="Site Logo" style="width:200px">
                                                         <img class="dark-mode" src="/assets/logo/zzmtech_logo.png" alt="Site Logo" style="width:200px">
                                                     </a>
                                                 </div>
                                                 <button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i class="fas fa-times"></i></button>
                                             </div>
                                         </div>
                                         <ul class="mainmenu">

                                             <li><a href="/" wire:navigate>Home</a></li>
                                             <li class="menu-item-has-children">
                                                 <a href="javascript:void(0);">About</a>
                                                 <ul class="axil-submenu">
                                                    <li><a href="/aboutus" wire:navigate>ZZMTech</a></li>
                                                    <li><a href="/team" wire:navigate>Team</a></li>
                                                    <li><a href="/ourclient" wire:navigate>Our Clients</a></li>
                                                    <li><a href="/accreditation" wire:navigate>Accreditation</a></li>
                                                    <li><a href="/testimonial" wire:navigate>Testimonials</a></li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="javascript:void(0);">Services</a>
                                                 <ul class="axil-submenu">
                                                    <li><strong class="ms-2 text-primary">General Services</strong></li>
                                                    <li><a href="/digitalconsultancy" wire:navigate>Digital Consultancy</a></li>
                                                    <li><a href="/web" wire:navigate>Web Development</a></li>
                                                    <li><a href="/backend" wire:navigate>Backend Development</a></li>
                                                    <li><a href="/frontend" wire:navigate>Frontend Development</a></li>
                                                    <li><a href="/api" wire:navigate>API Development</a></li>
                                                    <li><a href="/mobile" wire:navigate>Mobile Apps Development</a></li>   
                                                    <li><strong class="ms-2 text-primary">Tech Enabler</strong></li>
                                                    <li><a href="/blockchain" wire:navigate>Blockchain Technology</a></li>
                                                    <li><a href="/cloudcomputing" wire:navigate>Cloud Computing</a></li>  
                                                    <li><a href="/cybersecurity" wire:navigate>Cybersecurity</a></li> 
                                                    <li><a href="/devsecops" wire:navigate>DevSecOps</a></li> 
                                                    <li><a href="/ai" wire:navigate>Artificial Intelligence</a></li>       
                                                    <li><a href="/iot" wire:navigate>Internet of Things (IOT)</a></li>  
                                                    <li><a href="/microservice" wire:navigate>Microservices</a></li>                                                                                    
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="javascript:void(0);">Portfolio</a>
                                                 <ul class="axil-submenu">
                                                    <li><a href="/workmethodology" wire:navigate>Work Methodology</a></li>
                                                    <li><a href="/casestudy" wire:navigate>Case Study</a></li>
                                                    <li><a href="/project" wire:navigate>Projects</a></li>
                                                    <li><a href="/publication" wire:navigate>Publications</a></li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="javascript:void(0);">Products</a>
                                                 <ul class="axil-submenu">
                                                     <li><strong class="ms-2 text-primary">Education</strong></li>
                                                     {{-- <li><a href="javascript:;"><b>Z-Tournament</b> - Tournament Management System</a></li> --}}
                                                     <li><a href="javascript:;"><b>Z-Learn</b> - ELearning Management System</a></li>
                                                     <li><a href="javascript:;"><b>Z-Quiz</b> - Quiz Management System</a></li>
                                                     <li><a href="javascript:;"><b>Z-Assignment</b> - ELearning Management System</a></li>
                                                     <li><a href="javascript:;"><b>Z-Certificate</b> - Certificate Management System</a></li>
                                                     <li><hr class="my-2"></li>
                                                     <li><strong class="ms-2  text-primary">Project Management</strong></li>
                                                     <li><a href="javascript:;"><b>Z-Project</b> - Project Management System</a></li>
                                                     <li><hr class="my-2"></li>
                                                     <li><strong class="ms-2  text-primary">Human Resources</strong></li>
                                                     <li><a href="javascript:;"><b>Z-HR</b> - Human Resources Management System</a></li>
                                                     <li><hr class="my-2"></li>
                                                     <li><strong class="ms-2  text-primary">Health & Safety</strong></li>
                                                     <li><a href="javascript:;"><b>Z-HSE</b> - Health, Safety & Environment System</a></li>
                                                     <li><hr class="my-2"></li>
                                                     {{-- <li><strong class="ms-2  text-primary">Financing</strong></li>
                                                     <li><a href="javascript:;"><b>Z-PayDay</b> - Payroll System</a></li>                                                       
                                                     <li><hr class="my-2"></li>
                                                     <li><strong class="ms-2  text-primary">POS</strong></li>
                                                     <li><a href="javascript:;"><b>Z-Resto</b> - Restaurant Ordering Management System</a></li>                                                       
                                                     <li><hr class="my-2"></li> --}}
                                                     {{-- <li><a href="javascript:;"><b>VIEW ALL PRODUCTS</b></a></li> --}}
                                                 </ul>
                                             </li>
                                             <!-- <li><a href="/blog">Blogs</a></li> -->
                                             <li><a href="/contact" wire:navigate>Contact</a></li>
                                         </ul>
                                     </nav>
                                     <!-- End Mainmanu Nav -->
                                 </div>
                                 <div class="header-action">
                                     <ul class="list-unstyled">
                                         <li class="sidemenu-btn d-lg-block d-none">
                                             <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight">
                                                 <span></span>
                                                 <span></span>
                                                 <span></span>
                                             </button>
                                         </li>
                                         <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                             <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
                                                 <span></span>
                                                 <span></span>
                                                 <span></span>
                                             </button>
                                         </li>
                                         <li class="my_switcher d-block d-lg-none">
                                             <ul>
                                                 <li title="Light Mode">
                                                     <a href="javascript:void(0)" class="setColor light" data-theme="light">
                                                         <i class="fal fa-lightbulb-on"></i>
                                                     </a>
                                                 </li>
                                                 <li title="Dark Mode">
                                                     <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
                                                         <i class="fas fa-moon"></i>
                                                     </a>
                                                 </li>
                                             </ul>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </header>
                 
                 @yield('content')			
                 {{ isset($slot) ? $slot : '' }}


                 <!--=====================================-->
                 <!--=        Footer Area Start       	=-->
                 <!--=====================================-->
                 <footer class="footer-area">
                     <div class="container">
                         <div class="footer-top">
                             <div class="footer-social-link">
                                 <ul class="list-unstyled">
                                     <li><a href="https://facebook.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100"><i class="fab fa-facebook-f"></i></a></li>
                                     <li><a href="https://twitter.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><i class="fab fa-twitter"></i></a></li>
                                     <li><a href="https://www.linkedin.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400"><i class="fab fa-linkedin-in"></i></a></li>
                                 </ul>
                             </div>
                         </div>
                         <div class="footer-main">
                             <div class="row">
                                 <div class="col-xl-2" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                                     <div class="d-flex flex-column">
                                         <img src="/assets/images/logo/Logo V4 for black background.png" alt="" srcset="">
                                         <p class="mb-1">© 2024 - {{date('Y')}} <br> All Rights Reserved</p>
                                         <p>Registration No: 202403251268 (003650437-D)</p>
                                         <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" class="text-white">LinkedIn | <i class="fab fa-linkedin-in"></i> </a>
                                     </div>
                                 </div>
                                 <div class="col-xl-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                                     <div class="d-flex flex-column">
                                         <h5>Get In Touch</h5>
                                         <p>ZZM Technologies, T03, Level 1, University Industry Research Laboratory (UIRL), Universiti Teknologi Malaysia, 81310 Johor Bahru, Johor</p>
                                         <p>admin@zzmtech.com</p>
                                     </div>
                                 </div>
                                 <div class="col-xl-7" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                                     <div class="row">
                                        <div class="col-sm-3">
                                            <div class="footer-widget">
                                                <h6 class="widget-title">About us</h6>
                                                <div class="footer-menu-link">
                                                    <ul class="list-unstyled">
                                                        <li><a href="/aboutus"><small>ZZMTech</small></a></li>
                                                        <li><a href="/team"><small>Team</small></a></li>
                                                        <li><a href="/ourclient"><small>Our Clients</small></a></li>
                                                    </ul>
                                                </div>

                                                <h6 class="widget-title pt-5">Portfolio</h6>
                                                <div class="footer-menu-link">
                                                    <ul class="list-unstyled">
                                                        <li><a href="/methodology"><small>Work Methodology</small></a></li>
                                                        <li><a href="/casestudy"><small>Case Study</small></a></li>
                                                        <li><a href="/project"><small>Projects</small></a></li>
                                                        <li><a href="/publication"><small>Publications</small></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="col-sm-5">
                                             <div class="footer-widget">
                                                 <h6 class="widget-title">Services</h6>
                                                 <div class="footer-menu-link">
                                                     <ul class="list-unstyled">
                                                        <li><strong class="text-primary">General Services</strong></li>
                                                        <li><a href="/consultancy">Digital Consultancy</a></li>
                                                        <li><a href="/webdevelopment">Web Development</a></li>
                                                        <li><a href="/webdevelopment">Backend Development</a></li>
                                                        <li><a href="/webdevelopment">Frontend Development</a></li>
                                                        <li><a href="/webdevelopment">API Development</a></li>
                                                        <li><a href="/mobiledevelopment">Mobile Apps Development</a></li>   
                                                        <li><strong class="text-primary">Tech Enabler</strong></li>
                                                        <li><a href="/blockchain">Blockchain Technology</a></li>
                                                        <li><a href="/cloudcomputing">Cloud Computing</a></li>  
                                                        <li><a href="/microservice">Cybersecurity</a></li> 
                                                        <li><a href="/microservice">DevSecOps</a></li> 
                                                        <li><a href="/microservice">Artificial Intelligence</a></li>       
                                                        <li><a href="/microservice">Internet of Things (IOT)</a></li>  
                                                        <li><a href="/microservice">Microservices</a></li>  
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="col-sm-4">
                                             <div class="footer-widget">
                                                 <h6 class="widget-title">Products</h6>
                                                 <div class="footer-menu-link">
                                                     <ul class="list-unstyled">
                                                         {{-- <li><a href="javascript:;"><small><b>K-Tournament</b> - Tournament Management System</small></a></li> --}}
                                                         <li><strong class="text-primary">General Services</strong></li>
                                                         <li><a href="javascript:;"><small><b>K-Learn</b> - ELearning Management System</small></a></li>
                                                         <li><a href="javascript:;"><small><b>Z-Quiz</b> - Quiz Management System</small></a></li>
                                                         <li><a href="javascript:;"><small><b>Z-Assignment</b> - ELearning Management System</small></a></li>
                                                         <li><a href="javascript:;"><small><b>Z-Certificate</b> - Certificate Management System</small></a></li>
                                                         <li><strong class="text-primary">General Services</strong></li>
                                                         <li><a href="javascript:;"><small><b>K-Project</b> - Project Management System</small></a></li>
                                                         <li><strong class="text-primary">General Services</strong></li>
                                                         <li><a href="javascript:;"><small><b>K-HR</b> - Human Resources Management System</small></a></li>
                                                         <li><strong class="text-primary">General Services</strong></li>
                                                         <li><a href="javascript:;"><small><b>K-HSE</b> - Health, Safety & Environment System</small></a></li>
                                                         {{-- <li><a href="javascript:;"><small><b>K-PayDay</b> - Payroll System</small></a></li>          
                                                         <li><a href="javascript:;"><small><b>K-Resto</b> - Restaurant Ordering Management System</small></a></li>         --}}
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                          

                         </div>
                         <div class="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                             <div class="row">
                                 <div class="col-md-6">
                                     <div class="footer-copyright">
                                         <span class="copyright-text">Copyright © 2022 - {{date('Y')}} ZZM Technologies</span>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="footer-bottom-link">
                                         <ul class="list-unstyled">
                                             <li><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
                                             <li><a href="/terms-of-service" target="_blank">Terms of Use</a></li>
                                         </ul>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </footer>




                 <!--=====================================-->
                 <!--=       Offcanvas Menu Area       	=-->
                 <!--=====================================-->
                 <div class="offcanvas offcanvas-end header-offcanvasmenu" tabindex="-1" id="offcanvasMenuRight">
                     <div class="offcanvas-header">
                         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                     <div class="offcanvas-body">
                         <div class="row ">
                             <div class="col-lg-7 col-xl-6">
                                 <div class="contact-info-wrap">
                                     <div class="contact-inner">
                                         <address class="address">
                                             <span class="title">Contact Information</span>
                                             <p>admin@zzmtech.com</p>
                                         </address>
                                         <address class="address">
                                             <span class="title">We're Available 24/7. </span>
                                         </address>
                                     </div>
                                     <div class="contact-inner">
                                         <h5 class="title">Find us here</h5>
                                         <div class="contact-social-share">
                                             <ul class="social-share list-unstyled">
                                                 <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                                 <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                                 <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                             </ul>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        
        </div>

        <!-- Jquery Js -->
        <script src="/assets/abstract/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/assets/abstract/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/abstract/js/vendor/isotope.pkgd.min.js"></script>
        <script src="/assets/abstract/js/vendor/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/abstract/js/vendor/odometer.min.js"></script>
        <script src="/assets/abstract/js/vendor/jquery-appear.js"></script>
        <script src="/assets/abstract/js/vendor/slick.min.js"></script>
        <script src="/assets/abstract/js/vendor/sal.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="/assets/abstract/js/vendor/js.cookie.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.style.switcher.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.countdown.min.js"></script>
        <script src="/assets/abstract/js/vendor/tilt.js"></script>
        <script src="/assets/abstract/js/vendor/green-audio-player.min.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.nav.js"></script>

        <!-- Site Scripts -->
        <script src="/assets/abstract/js/app.js"></script>
    
        {{-- @livewireScripts --}}
    </body>
</html>
