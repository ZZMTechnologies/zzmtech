export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading heading-light-left">
            <h2 className="title">Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info mb--100 mb_md--30">
                <h4 className="title">Phone / Whatsapp</h4>
                <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                <h4 className="phone-number"><a href="tel:+601162114073">+601162114073</a></h4>
              </div>
              <div className="contact-info mb--30">
                <h4 className="title">Email</h4>
                <p>Our support team will get back to in 48-h during standard business hours.</p>
                <h4 className="phone-number"><a href="mailto:admin@zzmtech.com">admin@zzmtech.com</a></h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-box shadow-box">
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
                    <textarea name="contact-message" id="contact-message" className="form-control textarea" cols="30" rows="4"></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Get Pricing Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <ul className="list-unstyled shape-group-12">
          <li className="shape shape-1"><img src="/assets/abstract/media/others/bubble-2.png" alt="Bubble" /></li>
          <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-1.png" alt="Bubble" /></li>
          <li className="shape shape-3"><img src="/assets/abstract/media/others/circle-3.png" alt="Circle" /></li>
        </ul>
      </section>
    </div>
  );
}
