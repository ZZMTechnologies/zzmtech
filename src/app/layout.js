import Link from 'next/link';
import './globals.css';
import Script from 'next/script';
import RouteReinitializer from './RouteReinitializer';

export const metadata = {
  metadataBase: new URL('https://zzmtech.com'),
  title: {
    default: 'ZZMTech',
    template: '%s | ZZMTech'
  },
  description: 'ZZMTech, Technology Solution craft for Industries and SMEs.',
  applicationName: 'ZZMTech',
  keywords: ['zzmtech', 'development', 'web'],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zzmtech.com',
    siteName: 'ZZMTech',
    title: 'ZZMTech',
    description: 'ZZMTech, Technology Solution craft for Industries and SMEs.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZZMTech',
    description: 'ZZMTech, Technology Solution craft for Industries and SMEs.'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
        />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/font-awesome.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick-theme.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/sal.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/green-audio-player.min.css" />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/odometer-theme-default.css" />
        <link rel="stylesheet" href="/assets/abstract/css/app.css" />
        <link rel="stylesheet" href="/assets/abstract/css/custom.css" />
      </head>
      <body
        id="kt_body"
        className="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled active-dark-mode"
      >
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="far fa-angle-double-up" />
        </a>

        <div id="preloader" />

        <div className="my_switcher d-none d-lg-block">
          <ul>
            <li title="Light Mode">
              <a href="#" className="setColor light" data-theme="light">
                <i className="fal fa-lightbulb-on" />
              </a>
            </li>
            <li title="Dark Mode">
              <a href="#" className="setColor dark" data-theme="dark">
                <i className="fas fa-moon" />
              </a>
            </li>
          </ul>
        </div>

        <div id="main-wrapper" className="main-wrapper">
          <header className="header axil-header header-style-1">
            <div id="axil-sticky-placeholder" />
            <div className="axil-mainmenu">
              <div className="container">
                <div className="header-navbar">
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        className="light-version-logo"
                        src="/assets/logo/zzmtech_logo.png"
                        alt="logo"
                        style={{ width: '200px' }}
                      />
                    </Link>
                    <Link href="/">
                      <img
                        className="dark-version-logo"
                        src="/assets/logo/zzmtech_logo.png"
                        alt="logo"
                        style={{ width: '200px' }}
                      />
                    </Link>
                    <Link href="/">
                      <img
                        className="sticky-logo"
                        src="/assets/logo/zzmtech_logo.png"
                        alt="logo"
                        style={{ width: '200px' }}
                      />
                    </Link>
                  </div>
                  <div className="header-main-nav">
                    <nav className="mainmenu-nav" id="mobilemenu-popup">
                      <div className="d-block d-lg-none">
                        <div className="mobile-nav-header">
                          <div className="mobile-nav-logo">
                            <Link href="/">
                              <img
                                className="light-mode"
                                src="/assets/logo/zzmtech_logo.png"
                                alt="Site Logo"
                                style={{ width: '200px' }}
                              />
                              <img
                                className="dark-mode"
                                src="/assets/logo/zzmtech_logo.png"
                                alt="Site Logo"
                                style={{ width: '200px' }}
                              />
                            </Link>
                          </div>
                          <button className="mobile-menu-close" data-bs-dismiss="offcanvas">
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <ul className="mainmenu">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">About</a>
                          <ul className="axil-submenu">
                            <li>
                              <Link href="/aboutus/">ZZMTech</Link>
                            </li>
                            <li>
                              <Link href="/team/">Team</Link>
                            </li>
                            <li>
                              <Link href="/ourclient/">Our Clients</Link>
                            </li>
                            <li>
                              <Link href="/accreditation/">Accreditation</Link>
                            </li>
                            <li>
                              <Link href="/testimonial/">Testimonials</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Services</a>
                          <ul className="axil-submenu">
                            <li>
                              <strong className="ms-2 text-primary">General Services</strong>
                            </li>
                            <li>
                              <Link href="/digitalconsultancy/">Digital Consultancy</Link>
                            </li>
                            <li>
                              <Link href="/web/">Web Development</Link>
                            </li>
                            <li>
                              <Link href="/backend/">Backend Development</Link>
                            </li>
                            <li>
                              <Link href="/frontend/">Frontend Development</Link>
                            </li>
                            <li>
                              <Link href="/api/">API Development</Link>
                            </li>
                            <li>
                              <Link href="/mobile/">Mobile Apps Development</Link>
                            </li>
                            <li>
                              <strong className="ms-2 text-primary">Tech Enabler</strong>
                            </li>
                            <li>
                              <Link href="/blockchain/">Blockchain Technology</Link>
                            </li>
                            <li>
                              <Link href="/cloudcomputing/">Cloud Computing</Link>
                            </li>
                            <li>
                              <Link href="/cybersecurity/">Cybersecurity</Link>
                            </li>
                            <li>
                              <Link href="/devsecops/">DevSecOps</Link>
                            </li>
                            <li>
                              <Link href="/ai/">Artificial Intelligence</Link>
                            </li>
                            <li>
                              <Link href="/iot/">Internet of Things (IOT)</Link>
                            </li>
                            <li>
                              <Link href="/microservice/">Microservices</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Portfolio</a>
                          <ul className="axil-submenu">
                            <li>
                              <Link href="/workmethodology/">Work Methodology</Link>
                            </li>
                            <li>
                              <Link href="/casestudy/">Case Study</Link>
                            </li>
                            <li>
                              <Link href="/project/">Projects</Link>
                            </li>
                            <li>
                              <Link href="/publication/">Publications</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Products</a>
                          <ul className="axil-submenu">
                            <li>
                              <strong className="ms-2 text-primary">Education</strong>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-Learn</b> - ELearning Management System
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-Quiz</b> - Quiz Management System
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-Assignment</b> - ELearning Management System
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-Certificate</b> - Certificate Management System
                              </a>
                            </li>
                            <li>
                              <hr className="my-2" />
                            </li>
                            <li>
                              <strong className="ms-2 text-primary">Project Management</strong>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-Project</b> - Project Management System
                              </a>
                            </li>
                            <li>
                              <hr className="my-2" />
                            </li>
                            <li>
                              <strong className="ms-2 text-primary">Human Resources</strong>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-HR</b> - Human Resources Management System
                              </a>
                            </li>
                            <li>
                              <hr className="my-2" />
                            </li>
                            <li>
                              <strong className="ms-2 text-primary">Health & Safety</strong>
                            </li>
                            <li>
                              <a href="#">
                                <b>Z-HSE</b> - Health, Safety & Environment System
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact/">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-action">
                    <ul className="list-unstyled">
                      <li className="sidemenu-btn d-lg-block d-none">
                        <button
                          className="btn-wrap"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasMenuRight"
                        >
                          <span />
                          <span />
                          <span />
                        </button>
                      </li>
                      <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                        <button
                          className="btn-wrap"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#mobilemenu-popup"
                        >
                          <span />
                          <span />
                          <span />
                        </button>
                      </li>
                      <li className="my_switcher d-block d-lg-none">
                        <ul>
                          <li title="Light Mode">
                            <a href="#" className="setColor light" data-theme="light">
                              <i className="fal fa-lightbulb-on" />
                            </a>
                          </li>
                          <li title="Dark Mode">
                            <a href="#" className="setColor dark" data-theme="dark">
                              <i className="fas fa-moon" />
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

          {children}

          <footer className="footer-area">
            <div className="container">
              <div className="footer-top">
                <div className="footer-social-link">
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-main">
                <div className="row">
                  <div className="col-xl-2">
                    <div className="d-flex flex-column">
                      <img src="/assets/logo/zzmtech_logo.png" alt="ZZMTech" />
                      <p className="mb-1">
                        © 2024 - {year} <br /> All Rights Reserved
                      </p>
                      <p>Registration No: 202403251268 (003650437-D)</p>
                      <a
                        href="https://www.linkedin.com/company/ketupart-studio/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white"
                      >
                        LinkedIn | <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="d-flex flex-column">
                      <h5>Get In Touch</h5>
                      <p>
                        ZZM Technologies, T03, Level 1, University Industry Research Laboratory
                        (UIRL), Universiti Teknologi Malaysia, 81310 Johor Bahru, Johor
                      </p>
                      <p>admin@zzmtech.com</p>
                    </div>
                  </div>
                  <div className="col-xl-7">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="footer-widget">
                          <h6 className="widget-title">About us</h6>
                          <div className="footer-menu-link">
                            <ul className="list-unstyled">
                              <li>
                                <Link href="/aboutus/">
                                  <small>ZZMTech</small>
                                </Link>
                              </li>
                              <li>
                                <Link href="/team/">
                                  <small>Team</small>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ourclient/">
                                  <small>Our Clients</small>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="footer-widget">
                          <h6 className="widget-title">Services</h6>
                          <div className="footer-menu-link">
                            <ul className="list-unstyled">
                              <li>
                                <strong className="text-primary">General Services</strong>
                              </li>
                              <li>
                                <Link href="/digitalconsultancy/">Digital Consultancy</Link>
                              </li>
                              <li>
                                <Link href="/web/">Web Development</Link>
                              </li>
                              <li>
                                <Link href="/backend/">Backend Development</Link>
                              </li>
                              <li>
                                <Link href="/frontend/">Frontend Development</Link>
                              </li>
                              <li>
                                <Link href="/api/">API Development</Link>
                              </li>
                              <li>
                                <Link href="/mobile/">Mobile Apps Development</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="footer-widget">
                          <h6 className="widget-title">Products</h6>
                          <div className="footer-menu-link">
                            <ul className="list-unstyled">
                              <li>
                                <a href="#">
                                  <small>
                                    <b>Z-Learn</b> - ELearning Management System
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <small>
                                    <b>Z-Quiz</b> - Quiz Management System
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <small>
                                    <b>Z-Assignment</b> - ELearning Management System
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <small>
                                    <b>Z-Certificate</b> - Certificate Management System
                                  </small>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-copyright">
                      <span className="copyright-text">Copyright © 2022 - {year} ZZM Technologies</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-bottom-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/privacy-policy/" target="_blank" rel="noreferrer">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-of-service/" target="_blank" rel="noreferrer">
                            Terms of Use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="offcanvas offcanvas-end header-offcanvasmenu" tabIndex="-1" id="offcanvasMenuRight">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div className="row">
                <div className="col-lg-7 col-xl-6">
                  <div className="contact-info-wrap">
                    <div className="contact-inner">
                      <address className="address">
                        <span className="title">Contact Information</span>
                        <p>admin@zzmtech.com</p>
                      </address>
                      <address className="address">
                        <span className="title">We&apos;re Available 24/7.</span>
                      </address>
                    </div>
                    <div className="contact-inner">
                      <h5 className="title">Find us here</h5>
                      <div className="contact-social-share">
                        <ul className="social-share list-unstyled">
                          <li>
                            <a href="https://facebook.com/">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RouteReinitializer />

        <Script src="/assets/abstract/js/vendor/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/jquery-appear.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/sal.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/js.cookie.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/jquery.style.switcher.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/jquery.countdown.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/tilt.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/green-audio-player.min.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/vendor/jquery.nav.js" strategy="afterInteractive" />
        <Script src="/assets/abstract/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
