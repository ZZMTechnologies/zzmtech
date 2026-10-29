const clients = [
  { file: 'logo_utm.png', delay: '' },
  { file: 'ketupart_studio.png', delay: '100' },
  { file: 'magicx.png', delay: '200' },
  { file: 'gwc.png', delay: '300' },
  { file: 'ihumen.png', delay: '400' },
  { file: 'momentum-internet.png', delay: '500' },
  { file: 'bursl.png', delay: '600' },
  { file: 'magicxr.png', delay: '700' }
];

export default function OurClientPage() {
  return (
    <div>
      <section className="section section-padding bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light-left">
            <span className="subtitle">We&apos;ve built solutions for...</span>
            <h2 className="title">Our Clients</h2>
            <p>
              From the latest technologies to robust security frameworks, we provide comprehensive
              solutions that empower industries. Our vision is to drive productivity, efficiency,
              and innovation for a brighter future.
            </p>
          </div>
          <div className="row">
            {clients.map((client, index) => (
              <div
                key={client.file}
                className="col-lg-3 col-6"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay={client.delay}
              >
                <div className={`brand-grid${index === 0 ? ' active' : ''}`}>
                  <img src={`/assets/abstract/media/brand/${client.file}`} alt="Brand" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/line-9.png" alt="Circle" />
          </li>
        </ul>
      </section>
    </div>
  );
}
