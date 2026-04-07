import Link from 'next/link';
export default function InternetOfThingsPage() {
  return (
    <div>
      <div
        className="breadcrum-area breadcrumb-banner"
        style={{
          backgroundImage: "url('/assets/abstract/media/banner/banner2.webp')",
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
            <h1 className="title h2">Internet Of Things (IoT)</h1>
            <p>Connecting the Future with Smart IoT Solutions: Where Devices, Data, and Intelligence Converge to Drive Automation, Efficiency, and Innovation Across Physical and Digital Worlds.</p>
          </div>
        </div>
      </div>

      <div className="service-scroll-navigation-area">
        <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
          <div className="container">
            <ul className="nav nav-pills">
              <li className="nav-item"><a className="nav-link" href="#section1">Overview</a></li>
              <li className="nav-item"><a className="nav-link" href="#section2">Our Capabilities</a></li>
              <li className="nav-item"><a className="nav-link" href="#section3">System Type</a></li>
              <li className="nav-item"><a className="nav-link" href="#section4">Technology Stack</a></li>
              <li className="nav-item"><a className="nav-link" href="#section5">Ecosystem</a></li>
            </ul>
          </div>
        </nav>

        <div className="section section-padding" id="section1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading heading-left mb-3">
                  <h2 className="title">Overview</h2>
                  <span className="subtitle">Connecting Devices, Driving Intelligence</span>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <p>Our company delivers Internet of Things (IoT) solutions that help businesses connect, monitor, and control devices across physical environments-turning real-world data into actionable insights and operational efficiency.</p>
                    <p>With a team of IoT specialists, we design and implement smart systems tailored to your industry needs-from sensor integration and device connectivity to data analytics and automation. Our solutions are built to seamlessly integrate with your existing infrastructure, ensuring smooth deployment and scalable growth.</p>
                    <p>From edge device setup and cloud integration to real-time monitoring and predictive maintenance, our IoT services empower organizations to improve productivity, enhance decision-making, and unlock new digital capabilities in a connected world.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="team-details-thumb">
                      <img className="paralax-image" src="/assets/abstract/media/banner/iot.png" alt="Thumbnail" style={{ willChange: 'transform', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding bg-color-light" id="section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="section-heading heading-left mb-3">
                  <h2 className="title">Our Capabilities</h2>
                  <span className="subtitle">Your Devices, Our Connectivity: Unlocking Possibilities with Smart IoT Solutions</span>
                </div>
                <p>As businesses strive to bridge the gap between the physical and digital worlds, the Internet of Things (IoT) emerges as a critical enabler of real-time visibility, automation, and innovation. At ZZMTech, we empower organizations to harness the power of connected devices to transform operations, improve efficiency, and drive smarter decisions.</p>
                <p>Our IoT capabilities enable seamless integration of sensors, devices, and platforms to collect, analyze, and act on data at scale. From industrial monitoring and smart environments to predictive maintenance and remote control systems, we deliver end-to-end IoT solutions that create tangible business value.</p>
                <p>ZZMTech combines technical precision with industry insight to deploy secure, scalable, and interoperable IoT systems. We help you unlock new efficiencies, reduce operational risk, and lead confidently into the era of intelligent connectivity.</p>
              </div>
              <div className="col-12 col-lg-7">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-45.png" alt="" />
                    <h5>IoT Device Integration</h5>
                    <p>Connecting and configuring sensors, actuators, and edge devices to collect real-time data from physical environments, enabling seamless communication across your IoT ecosystem.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-46.png" alt="" />
                    <h5>Edge Computing &amp; Data Processing</h5>
                    <p>Processing data at the edge to reduce latency and bandwidth usage, allowing real-time decision-making and intelligent automation close to the source of data generation.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-47.png" alt="" />
                    <h5>IoT Platform Integration</h5>
                    <p>Implementing cloud-based or on-premise IoT platforms for centralized monitoring, control, and analytics-integrating with services like AWS IoT, Azure IoT Hub, or custom dashboards.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-32.png" alt="" />
                    <h5>Security &amp; Device Management</h5>
                    <p>Ensuring secure communication, device authentication, and firmware updates across the IoT network, with robust protocols to protect against breaches and maintain compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding" id="section3">
          <div className="container">
            <div className="section-heading heading-left">
              <h2 className="title">Services Type</h2>
              <span className="subtitle">We provide a range of services to meet your needs</span>
              <div style={{ overflow: 'scroll' }}>
                <table className="w-100 table table-bordered text-white">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'top' }}>
                        <div className="pricing-table active">
                          <div className="pricing-body">
                            <ul className="list-unstyled">
                              <li>IoT Consulting &amp; Architecture</li>
                              <li>IoT Platform &amp; Cloud Integration</li>
                              <li>IoT Security Services</li>
                              <li>Device &amp; Sensor Integration</li>
                              <li>IoT with AI/ML (Intelligent IoT)</li>
                              <li>Real-Time Monitoring &amp; Alerts</li>
                              <li>End-to-End IoT System Development</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding bg-color-light" id="section4">
          <div className="container">
            <div className="section-heading heading-left">
              <span className="subtitle">Service</span>
              <h2 className="title">Technology Stack</h2>
            </div>
          </div>
        </div>

        <div className="section section-padding" id="section5">
          <div className="container">
            <div className="section-heading">
              <span className="subtitle">Service</span>
              <h2 className="title">Ecosystem</h2>
              <p className="w-100">ZZMTech advises, curates and orchestrates technologies from market-leading partners and innovators. Together, we provide scalable, fully integrated cloud solutions that deliver next-level results.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="h-100" data-sal="slide-up" data-sal-duration="500"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/awswhite.avif" alt="Brand" className="p-5" style={{ width: '250px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/azure.png" alt="Brand" className="p-5" style={{ width: '300px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/gcp.png" alt="Brand" className="p-5" style={{ width: '500px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/do.png" alt="Brand" className="p-5" style={{ width: '300px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/hetzner.png" alt="Brand" className="p-5" style={{ width: '300px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/vultr.png" alt="Brand" className="p-5" style={{ width: '300px' }} /></div></div>
              <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><div className="d-flex justify-content-center align-items-center"><img src="/assets/abstract/media/brand/linode.png" alt="Brand" className="p-5" style={{ width: '300px' }} /></div></div>
            </div>
          </div>
          <div className="text-center"><strong>Our Ecosystem of Cloud Computing</strong></div>
        </div>
      </div>

      <section className="section py-5 bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light">
            <span className="subtitle">Let&apos;s Work Together</span>
            <h2 className="title">Need a successful project?</h2>
            <Link href="/contact" className="axil-btn btn-fill-primary btn-large">Estimate Project</Link>
          </div>
        </div>
        <ul className="list-unstyled shape-group-9">
          <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
          <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-13.png" alt="Comments" /></li>
          <li className="shape shape-4"><img src="/assets/abstract/media/others/bubble-14.png" alt="Comments" /></li>
          <li className="shape shape-5"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
          <li className="shape shape-6"><img src="/assets/abstract/media/others/bubble-15.png" alt="Comments" /></li>
          <li className="shape shape-7"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
        </ul>
      </section>
    </div>
  );
}
