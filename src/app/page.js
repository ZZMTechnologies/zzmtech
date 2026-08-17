import Link from 'next/link';
const generalServices = [
  {
    title: 'Digital Consultancy',
    href: '/digitalconsultancy/',
    description: 'Boost your business with expert tech strategies and guidance.',
    icon: 'icon-47.png'
  },
  {
    title: 'Web Development',
    href: '/web/',
    description: 'Build high-quality, user-friendly websites tailored to your needs.',
    icon: 'icon-46.png'
  },
  {
    title: 'Backend Development',
    href: '/backend/',
    description: 'Develop robust and scalable server-side solutions for your applications.',
    icon: 'icon-38.png'
  },
  {
    title: 'Frontend Development',
    href: '/frontend/',
    description: 'Craft engaging and responsive user interfaces for web apps.',
    icon: 'icon-40.png'
  },
  {
    title: 'API Development',
    href: '/api/',
    description: 'Design custom APIs for scalable and reliable solutions.',
    icon: 'icon-41.png'
  },
  {
    title: 'Mobile Apps Development',
    href: '/mobile/',
    description: 'Create top-notch mobile apps for seamless user experiences.',
    icon: 'icon-32.png'
  }
];

const techEnablers = [
  // {
  //   title: 'Blockchain Technology',
  //   href: '/blockchain/',
  //   description: 'Implement secure blockchain solutions for transparency and efficiency.',
  //   icon: 'icon-28.png',
  //   colClass: 'col-xl-3 col-md-6'
  // },
  {
    title: 'Cloud Computing',
    href: '/cloudcomputing/',
    description: 'Leverage cloud platforms (AWS, Azure, Google Cloud) for scalable infrastructure.',
    icon: 'icon-42.png',
    colClass: 'col-xl-4 col-md-6'
  },
  {
    title: 'Cybersecurity',
    href: '/cybersecurity/',
    description: 'Protect your data and systems with comprehensive security solutions.',
    icon: 'icon-39.png',
    colClass: 'col-xl-4 col-md-6'
  },
  {
    title: 'DevSecOps',
    href: '/devsecops/',
    description: 'Integrate security throughout your software development lifecycle.',
    icon: 'icon-36.png',
    colClass: 'col-xl-4 col-md-6'
  },
  {
    title: 'Artificial Intelligence',
    href: '/ai/',
    description: 'Utilize AI for intelligent automation and data-driven insights.',
    icon: 'icon-39.png',
    colClass: 'col-xl-4 col-md-6'
  },
  {
    title: 'Internet of Things (IoT)',
    href: '/iot/',
    description: 'Connect devices and systems for innovative IoT solutions.',
    icon: 'icon-45.png',
    colClass: 'col-xl-4 col-md-6'
  },
  {
    title: 'Microservices',
    href: '/microservice/',
    description: 'Build scalable and maintainable applications with microservice architecture.',
    icon: 'icon-38.png',
    colClass: 'col-xl-4 col-md-6'
  }
];

const featuredSlides = [
  {
    subtitle: '#1 Service Deliverable',
    title: 'Professional, Certified & Experienced Developer',
    description:
      'Unlock the full potential of your business with our customized and cutting-edge technology solutions, designed and developed by our talented team of experts to meet your unique needs and exceed your expectations.',
    counters: [
      {
        count: 10,
        symbol: '',
        title: 'Certifications',
        desc: 'Number of relevant certifications held by our development team'
      },
      {
        count: 10,
        symbol: '++',
        title: 'Years of Experience',
        desc: 'Average years of experience of our development team'
      }
    ]
  },
  {
    subtitle: '#2 Service Deliverable',
    title: 'Agile Project Environment',
    description:
      'Accelerate your path to success with our agile project environment, delivering flexible, responsive, and efficient solutions that adapt to your changing needs, driven by collaboration, transparency, and continuous improvement.',
    counters: [
      {
        count: 30,
        symbol: '%',
        title: 'Time-to-Market',
        desc: 'Our agile approach helps deliver product 30% faster than traditional methods.'
      },
      {
        count: 100,
        symbol: '%',
        title: 'Completion Rate',
        desc: 'Projects successfully completed on time and within budget'
      }
    ]
  },
  {
    subtitle: '#3 Service Deliverable',
    title: 'Newest Technology and Security Compliance',
    description:
      'Stay ahead of the curve with our innovative solutions, leveraging the newest technologies and security compliance standards to keep your business and customer data safe, secure, and ahead of the competition.',
    counters: []
  },
  {
    subtitle: '#4 Service Deliverable',
    title: 'High Quality Support & Maintenance',
    description:
      'Enjoy peace of mind with our high-quality support and maintenance services, providing round-the-clock technical assistance, regular updates, and proactive maintenance to ensure your solutions perform at their best and meet your evolving needs.',
    counters: []
  }
];

const featureThumbs = ['case-study-4.png', 'case-study-5.png', 'case-study-6.png'];

const counters = [
  { count: 2, symbol: '+', title: 'Years of operation', icon: 'icon-7.png' },
  { count: 4, symbol: '+', title: 'Projects deliverd', icon: 'icon-8.png' },
  { count: 3, symbol: '+', title: 'Specialist', icon: 'icon-9.png' },
  { count: 6, symbol: '+', title: 'Credentials', icon: 'apple.png' }
];

const slickMain = JSON.stringify({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  asNavFor: '.featured-thumbnail'
});

const slickThumb = JSON.stringify({
  infinite: true,
  arrows: false,
  dots: false,
  fade: true,
  slidesToShow: 1,
  asNavFor: '.featured-content'
});

function ServiceCard({ title, href, description, icon, active = false }) {
  return (
    <div className={`services-grid${active ? ' active' : ''}`} style={{ padding: '20px' }}>
      <div className="content">
        <img src={`/assets/abstract/media/icon/${icon}`} alt="icon" />
        <h5 className="title mb-2">
          <a href={href}>{title}</a>
        </h5>
        <p className="mb-2">{description}</p>
        <a href={href} className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <section className="banner banner-style-4">
        <div className="container">
          <div className="banner-content">
            <h2 className="title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              Driving Transformation. Your Partner in Innovation & Growth.
            </h2>
            <p data-sal="slide-up" data-sal-duration="1000">
              From the latest technologies to robust security frameworks, we provide comprehensive
              solutions that empower industries. Our vision is to drive productivity, efficiency,
              and innovation for a brighter future.
            </p>
            <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
              <a href="#section-2" className="axil-btn btn-fill-primary btn-large">
                View Services
              </a>
            </div>
          </div>
          <div className="banner-thumbnail">
            <div className="large-thumb text-end" data-sal="slide-left" data-sal-duration="800" data-sal-delay="400">
              <img className="paralax-image w-100 w-lg-50 me-20 me-lg-0" src="/assets/abstract/media/banner/technology.png" alt="Shape" />
            </div>
          </div>
          <div className="banner-social" data-sal="slide-up" data-sal-duration="800">
            <div className="border-line" />
            <ul className="list-unstyled social-icon">
              <li>
                <a href="https://facebook.com/">
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" /> twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" /> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="list-unstyled shape-group-19">
          <li className="shape shape-1" data-sal="slide-down" data-sal-duration="500" data-sal-delay="100">
            <img src="/assets/abstract/media/others/bubble-29.png" alt="Bubble" />
          </li>
          <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
            <img src="/assets/abstract/media/others/line-7.png" alt="Bubble" />
          </li>
        </ul>
      </section>

      <section className="section section-padding-2 bg-color-dark" id="section-2">
        <div className="container">
          <div className="section-heading ">
            <span className="subtitle">Services we can help you with</span>
            <h2 className="title text-white">General Services</h2>
            <p className="text-white opacity-50 w-100">
              Your vision, our expertise: together we build exceptional software that drives your success.
            </p>
          </div>
          <div className="row">
            {generalServices.map((service, index) => (
              <div key={service.title} className="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay={index < 2 ? '100' : '300'}>
                <ServiceCard {...service} active={index === 0} />
              </div>
            ))}
          </div>
          <div className="section-heading ">
            <h2 className="title text-white">Tech Enablers</h2>
            <p className="text-white opacity-50 w-100">
              Enabling your success by providing the building blocks for digital transformation.
            </p>
          </div>
          <div className="row">
            {techEnablers.map((service, index) => (
              <div key={service.title} className={service.colClass} data-sal="slide-up" data-sal-duration="800" data-sal-delay={index === 0 ? '200' : '300'}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/line-9.png" alt="Circle" />
          </li>
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/bubble-42.png" alt="Circle" />
          </li>
          <li className="shape shape-3">
            <img src="/assets/abstract/media/others/bubble-43.png" alt="Circle" />
          </li>
        </ul>
      </section>

      <section className="section section-padding-equal bg-color-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6" data-sal="slide-up" data-sal-duration="800">
              <div className="about-us">
                <div className="section-heading heading-left mb-0">
                  <span className="subtitle">Our Core Work</span>
                  <h2 className="title mb--40">
                    We manage your software from concept to deployment and beyond.
                  </h2>
                  <p>
                    We provide comprehensive software management services, guiding your project from
                    initial concept and design through the entire development lifecycle. This includes
                    expert coding, rigorous testing, and seamless deployment. But our commitment does
                    not end there. We also offer ongoing maintenance and support to ensure your software
                    continues to perform optimally, adapt to changing needs, and deliver long-term value.
                    From inception to operation and beyond, we are your dedicated partner in software
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
              <div className="contact-form-box">
                <h3 className="title">Get a free Keystroke quote now</h3>
                <form method="POST" action="" className="axil-contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="contact-name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="contact-email" />
                  </div>
                  <div className="form-group">
                    <label>Company/Entity/Group</label>
                    <input type="text" className="form-control" name="contact-company" />
                  </div>
                  <div className="form-group mb--40">
                    <label>How can we help you?</label>
                    <textarea name="contact-message" id="contact-message" className="form-control textarea" cols="30" rows="4" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">
                      Get Pricing Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-6 list-unstyled">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/bubble-7.png" alt="Bubble" />
          </li>
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/line-4.png" alt="line" />
          </li>
          <li className="shape shape-3">
            <img src="/assets/abstract/media/others/line-5.png" alt="line" />
          </li>
        </ul>
      </section>

      <section className="section section-padding-equal case-study-featured-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-sal="slide-right" data-sal-duration="800">
              <div className="slick-slider slick-dot-nav featured-content" data-slick={slickMain}>
                {featuredSlides.map((slide) => (
                  <div key={slide.title} className="slick-slide">
                    <div className="case-study-featured">
                      <div className="section-heading heading-left">
                        <span className="subtitle">{slide.subtitle}</span>
                        <h2 className="title">{slide.title}</h2>
                        <p>{slide.description}</p>
                      </div>
                      {slide.counters.length > 0 ? (
                        <div className="case-study-counterup">
                          {slide.counters.map((counter) => (
                            <div key={counter.title} className="single-counterup">
                              <h2 className="count-number">
                                <span className="number count" data-count={counter.count}>0</span>
                                <span className="symbol">{counter.symbol}</span>
                              </h2>
                              <span className="counter-title">
                                <b>{counter.title}</b> <br />
                                {counter.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 d-none d-lg-block" data-sal="slide-left" data-sal-duration="800">
              <div className="slick-slider slick-dot-nav featured-thumbnail" data-slick={slickThumb}>
                {featureThumbs.map((img) => (
                  <div key={img} className="slick-slide">
                    <div className="case-study-featured-thumb">
                      <img src={`/assets/abstract/media/others/${img}`} alt="travel" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-padding bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light">
            <span className="subtitle">Fueling the future</span>
            <h2 className="title">From Vision To Reality</h2>
            <p>
              Benefit from our years of operation, a portfolio of successfully delivered projects,
              and the assurance of working with our credentialed, in-house experts.
            </p>
          </div>
          <div className="row">
            {counters.map((counter, index) => (
              <div key={counter.title} className="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay={`${(index + 1) * 100}`}>
                <div className={`counterup-progress${index === 0 ? ' active' : ''}`}>
                  <div className="icon">
                    <img src={`/assets/abstract/media/icon/${counter.icon}`} alt="icon" />
                  </div>
                  <div className="h2">
                    <span className="number count" data-count={counter.count}>0</span>
                    <span className="symbol">{counter.symbol}</span>
                  </div>
                  <h6 className="title">{counter.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/line-9.png" alt="Circle" />
          </li>
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/bubble-42.png" alt="Circle" />
          </li>
          <li className="shape shape-3">
            <img src="/assets/abstract/media/others/bubble-43.png" alt="Circle" />
          </li>
        </ul>
      </section>

      <section className="section py-5 bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light">
            <span className="subtitle">Let&apos;s Work Together</span>
            <h2 className="title">Need a successful project?</h2>
            <Link href="/contact/" className="axil-btn btn-fill-primary btn-large">
              Kick Start Project
            </Link>
          </div>
        </div>
        <ul className="list-unstyled shape-group-9">
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
          </li>
          <li className="shape shape-3">
            <img src="/assets/abstract/media/others/bubble-13.png" alt="Comments" />
          </li>
          <li className="shape shape-4">
            <img src="/assets/abstract/media/others/bubble-14.png" alt="Comments" />
          </li>
          <li className="shape shape-5">
            <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
          </li>
          <li className="shape shape-6">
            <img src="/assets/abstract/media/others/bubble-15.png" alt="Comments" />
          </li>
          <li className="shape shape-7">
            <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
          </li>
        </ul>
      </section>
    </div>
  );
}
