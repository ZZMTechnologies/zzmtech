export default function TeamPage() {
  return (
    <div>
      <div className="breadcrum-area breadcrumb-banner">
        <div className="container">
          <div
            className="section-heading heading-left"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            <h1 className="title h2">Team</h1>
            <p>
              Build your solution with us and revolutionize the way forward with state-of-the-art
              technology that help people life.
            </p>
          </div>
          <div
            className="banner-thumbnail thumbnail-2"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="400"
          >
            <img className="paralax-image" src="/assets/abstract/media/banner/world-connect.png" alt="Illustration" />
          </div>
        </div>
        <ul className="shape-group-8 list-unstyled">
          <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
            <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
          </li>
          <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
            <img src="/assets/abstract/media/others/bubble-21.png" alt="Bubble" />
          </li>
          <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
            <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
          </li>
        </ul>
      </div>

      <section className="section-padding-equal">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
              <div className="about-team">
                <div className="section-heading heading-left">
                  <span className="subtitle">Our Team</span>
                  <h2>Craft, Contribute, Innovate, Transform, Conquer</h2>
                  <p>
                    Driven by collaboration, our team consistently delivers impactful solutions that
                    surpass expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
          <div className="section-heading heading-light">
            <span className="subtitle">Strategic Leadership</span>
            <h2 className="title mb--50">Meet The Team</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="team-grid">
                <div className="thumbnail">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#zulZaynModal">
                    <img src="/assets/abstract/media/team/zulzayn.jpeg" alt="Team Member" style={{ width: '200px' }} />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#zulZaynModal">
                      Zulwaqar Zain Mohtar
                    </a>
                  </h4>
                  <span className="designation fw-bold">Founder</span>
                  <span className="designation">Software Engineer / Cloud Specialist / Full-Stack Developer</span>
                  <br />
                  <span className="designation">
                    <b>Professional Certified</b>
                  </span>
                  <span className="designation">AWS Certified Solutions Architect</span>
                  <span className="designation">AWS Certified Cloud Practitioner</span>
                  <span className="designation">Microsoft Certified: Azure AI Fundamentals</span>
                  <span className="designation">Microsoft Certified: Azure Data Fundamental</span>
                  <span className="designation">Microsoft Certified: Azure Fundamentals</span>
                  <span className="designation">Unity Certified User: Programmer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/circle-1.png" alt="Circle" />
          </li>
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/line-3.png" alt="Circle" />
          </li>
          <li className="shape shape-3">
            <img src="/assets/abstract/media/others/bubble-5.png" alt="Circle" />
          </li>
        </ul>
      </section>

      <div className="modal fade" id="zulZaynModal" tabIndex="-1" aria-labelledby="zulZaynModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-color-dark">
            <div className="modal-body p-0">
              <a href="#" className="float-end text-white p-4" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle h5 mb-0" />
              </a>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <img src="/assets/abstract/media/team/zulzayn.jpeg" alt="Team Member" className="w-100" />
                </div>
                <div className="col-12 col-lg-8">
                  <div className="content d-flex flex-column h-100 justify-content-center">
                    <h4 className="title">Zulwaqar Zain Mohtar</h4>
                    <span className="designation fw-bold">Founder</span>
                    <span className="designation">Software Engineer / Cloud Specialist / Full-Stack Developer</span>
                    <p>
                      Mr. Zulwaqar Zain received his Master of Philosophy in Software Engineering
                      from UTM and is proficient in Web Technologies, Cloud Computing and Software
                      Engineering. He has participated in various high-profile projects, including
                      Digital Transformation of Health, Safety and Environment (HSE) for UMW
                      Holdings and its subsidiaries including Toyota Motor Malaysia, KYB Malaysia,
                      UMW Aerospace and UMW Komatsu, Digital Twin Offshore Pipeline for PETRONAS
                      and Enterprise Resource Planning (ERP) for Global Water Consultant (GWC) a
                      subsidaries of G&P Professionals Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
