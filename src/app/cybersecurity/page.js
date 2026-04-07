import Link from 'next/link';
export default function CybersecurityPage() {
  return (
    <div>
      <div
        className="breadcrum-area breadcrumb-banner"
        style={{
          backgroundImage: "url('/assets/abstract/media/banner/banner5.webp')",
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
            <h1 className="title h2">Cybersecurity</h1>
            <p>Safeguarding Businesses with Top-Notch Cybersecurity Solutions: Where Vigilance, Innovation, and Expertise Unite to Protect Digital Assets, Ensure Compliance, and Foster Trust in a Connected World.</p>
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
                  <span className="subtitle">Securing Digital Frontiers, Empowering Peace of Mind</span>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <p>Our company provides professional cybersecurity services designed to protect your digital assets, ensure data integrity, and safeguard your business against evolving cyber threats. With a team of experienced cybersecurity specialists, we deliver tailored security solutions aligned with your industry, infrastructure, and regulatory requirements.</p>
                    <p>From risk assessment and vulnerability management to advanced threat detection and incident response, we utilize cutting-edge technologies and proven methodologies to fortify your systems, networks, and applications. Our proactive approach helps identify and mitigate vulnerabilities before they can be exploited, reducing risk and minimizing downtime.</p>
                    <p>Whether you&apos;re looking to enhance your cloud security, implement endpoint protection, or achieve compliance with industry standards, our comprehensive cybersecurity services empower your business with the confidence to operate securely in today&apos;s digital landscape.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="team-details-thumb">
                      <img className="paralax-image" src="/assets/abstract/media/banner/cybersecurity.png" alt="Thumbnail" style={{ willChange: 'transform', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }} />
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
                  <span className="subtitle">Your Security, Our Priority: Defending What Matters Most in the Digital Age</span>
                </div>
                <p>As cyber threats grow in sophistication and frequency, ZZMTech is equipped to help organizations navigate the evolving threat landscape with confidence. From the rise of remote work to the widespread adoption of cloud computing and connected devices, businesses face increasing pressure to secure their digital environments and comply with regulatory standards.</p>
                <p>At ZZMTech, we deliver adaptive and tailored cybersecurity solutions designed to protect your critical assets, reduce risks, and ensure business continuity. Our approach blends industry-proven frameworks, real-time threat intelligence, and expert implementation to provide end-to-end protection across your IT infrastructure.</p>
                <p>Beyond minimizing vulnerabilities, our Cybersecurity Services focus on enabling resilience, strengthening stakeholder trust, and fostering a secure foundation for digital innovation. We empower our clients to operate boldly, knowing their systems, data, and users are protected by industry best practices and cutting-edge defenses.</p>
              </div>
              <div className="col-12 col-lg-7">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-45.png" alt="" />
                    <h5>Threat Detection &amp; Response</h5>
                    <p>Providing real-time monitoring and rapid response to security incidents using advanced threat intelligence and automated detection systems to minimize damage and downtime.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-46.png" alt="" />
                    <h5>Vulnerability Assessment</h5>
                    <p>Identifying, analyzing, and prioritizing security weaknesses across your systems and networks to proactively address risks before they can be exploited.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-47.png" alt="" />
                    <h5>Cloud Security</h5>
                    <p>Securing cloud infrastructures and services with robust access controls, encryption, and continuous compliance monitoring to protect data in dynamic environments.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src="/assets/abstract/media/icon/icon-32.png" alt="" />
                    <h5>Security Compliance &amp; Governance</h5>
                    <p>Helping businesses meet industry regulations such as ISO 27001, GDPR, and PDPA through policy enforcement, auditing, and risk-based governance frameworks.</p>
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
                      <td style={{ width: '33.333%' }}><h5 className="mb-0 fw-bold">Web Application Security</h5></td>
                      <td style={{ width: '33.333%' }}><h5 className="mb-0 fw-bold">Cloud Security Services</h5></td>
                      <td style={{ width: '33.333%' }}><h5 className="mb-0 fw-bold">SSL/TLS &amp; HTTPS Implementation</h5></td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: 'top' }}>
                        <div className="pricing-table active">
                          <div className="pricing-body">
                            <ul className="list-unstyled">
                              <li>Perform penetration testing and vulnerability scanning on web apps.</li>
                              <li>Implement OWASP Top 10 protections</li>
                              <li>Secure authentication flows</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td style={{ verticalAlign: 'top' }}>
                        <div className="pricing-table active">
                          <div className="pricing-body">
                            <ul className="list-unstyled">
                              <li>Enable and manage encryption at rest and in transit</li>
                              <li>Set up security groups, firewalls, WAF (Web Application Firewall)</li>
                              <li>Implement secure CI/CD pipelines</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td style={{ verticalAlign: 'top' }}>
                        <div className="pricing-table active">
                          <div className="pricing-body">
                            <ul className="list-unstyled">
                              <li>Configure HTTPS with SSL certificates</li>
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
