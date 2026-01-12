import WebForm from '@/components/WebForm';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">FORT WORTH, WEATHERFORD, AND SURROUNDING AREAS</p>
            <h1 className="hero-title">Serving local communities for over 40 years</h1>
            <p className="hero-description">Our licensed plumbers have over 100 years of combined experience.</p>
            <a href="#" className="btn btn-danger btn-lg hero-btn">Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-restoration-list" data-bs-toggle="list" href="#list-restoration" role="tab" aria-controls="list-restoration">Restoration</a>
              <a className="list-group-item list-group-item-action" id="list-kitchen-bath-list" data-bs-toggle="list" href="#list-kitchen-bath" role="tab" aria-controls="list-kitchen-bath">Kitchen &amp; Bath Remodel</a>
              <a className="list-group-item list-group-item-action" id="list-cabinets-list" data-bs-toggle="list" href="#list-cabinets" role="tab" aria-controls="list-cabinets">Cabinet Design &amp; Install</a>
              <a className="list-group-item list-group-item-action" id="list-painting-list" data-bs-toggle="list" href="#list-painting" role="tab" aria-controls="list-painting">Interior &amp; Exterior Painting</a>
              <a className="list-group-item list-group-item-action" id="list-flooring-list" data-bs-toggle="list" href="#list-flooring" role="tab" aria-controls="list-flooring">Flooring Installation</a>
              <a className="list-group-item list-group-item-action" id="list-plumbing-list" data-bs-toggle="list" href="#list-plumbing" role="tab" aria-controls="list-plumbing">Plumbing</a>
              <a className="list-group-item list-group-item-action" id="list-water-heaters-list" data-bs-toggle="list" href="#list-water-heaters" role="tab" aria-controls="list-water-heaters">Water Heaters</a>
              <a className="list-group-item list-group-item-action" id="list-drain-cleaning-list" data-bs-toggle="list" href="#list-drain-cleaning" role="tab" aria-controls="list-drain-cleaning">Drain Cleaning</a>
              <a className="list-group-item list-group-item-action" id="list-hydrojetting-list" data-bs-toggle="list" href="#list-hydrojetting" role="tab" aria-controls="list-hydrojetting">Hydrojetting</a>
              <a className="list-group-item list-group-item-action" id="list-leak-detection-list" data-bs-toggle="list" href="#list-leak-detection" role="tab" aria-controls="list-leak-detection">Leak Detection</a>
              <a className="list-group-item list-group-item-action" id="list-camera-inspection-list" data-bs-toggle="list" href="#list-camera-inspection" role="tab" aria-controls="list-camera-inspection">Camera &amp; Video Inspection</a>
              <a className="list-group-item list-group-item-action" id="list-excavation-list" data-bs-toggle="list" href="#list-excavation" role="tab" aria-controls="list-excavation">Excavation</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-restoration" role="tabpanel" aria-labelledby="list-restoration-list">
                <h1>Restoration Services</h1>
                <h3>Bringing Your Property Back to Life</h3>
                <p>Our comprehensive restoration services help bring your property back to its original condition after water damage, fire damage, or other disasters.</p>
                <a href="#" className="btn service-btn">More</a>
              </div>
              <div className="tab-pane fade" id="list-plumbing" role="tabpanel" aria-labelledby="list-plumbing-list">
                <h1>Plumbing Services</h1>
                <h3>100+ Years of Combined Experience</h3>
                <p>Our licensed plumbers bring over 100 years of combined experience to handle all your plumbing needs.</p>
                <a href="#" className="btn service-btn">More</a>
              </div>
              <div className="tab-pane fade" id="list-water-heaters" role="tabpanel" aria-labelledby="list-water-heaters-list">
                <h1>Water Heater Services</h1>
                <h3>Hot Water When You Need It</h3>
                <p>Keep your hot water flowing with our water heater installation, repair, and maintenance services.</p>
                <a href="#" className="btn service-btn">More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-body-secondary py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-certificate text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">Licensed &amp; Insured</h3>
                  <p>Our fully licensed and insured professionals bring decades of expertise to every project.</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-clock text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">24/7 Emergency Service</h3>
                  <p>Available around the clock for your urgent plumbing and restoration emergencies.</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-shield-halved text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">Quality Guaranteed</h3>
                  <p>We stand behind our work with comprehensive warranties and satisfaction guarantees.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-md-1 text-center">
              <img src="/images/plumber.jpg" alt="Professional Plumber" className="img-fluid rounded" />
            </div>

            <div className="col-md-3 offset-md-1 mt-5 mt-md-0">
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-dollar-sign text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">Upfront Pricing</h3>
                  <p>Transparent quotes with no hidden fees.</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-user-tie text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">Expert Technicians</h3>
                  <p>Our team brings over 100 years of combined experience to every job.</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <i className="fas fa-heart text-danger me-3 fs-2"></i>
                <div>
                  <h3 className="fw-bold mb-2 fs-4">Local &amp; Trusted</h3>
                  <p>Proudly serving Fort Worth, Weatherford, and surrounding areas for over 40 years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="service-title text-center mb-4">Our Loyal Customers</h2>
            <div className="d-flex justify-content-center">
              <iframe 
                src="https://reviews-iframe.podium.com?locationSlug=Iv5jtR4sCbAHWvM1diPe4Q&count=50" 
                frameBorder={0}
                style={{width: '100%', maxWidth: '500px', height: '500px', border: 'none'}}
                title="Customer Reviews"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* REQUEST SERVICE SECTION */}
      <div className="bg-body-secondary py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold">Our Locations</h3>
                <div className="row">
                  <div className="col-6">
                    <p className="mb-0 fw-bold">Fort Worth Office</p>
                    <p className="mb-0">3310 Lackland Rd</p>
                    <p className="mb-1">Fort Worth, TX 76116</p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=3310+Lackland+Rd,Fort+Worth,TX+76116" target="_blank" rel="noreferrer" className="text-danger small">Get Directions</a>
                  </div>
                  <div className="col-6">
                    <p className="mb-0 fw-bold">Weatherford Office</p>
                    <p className="mb-0">106 N Line St</p>
                    <p className="mb-1">Weatherford, TX 76086</p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=106+N+Line+St,Weatherford,TX+76086" target="_blank" rel="noreferrer" className="text-danger small">Get Directions</a>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="mb-0 text-muted">Call Us Today!</p>
                  <a href="tel:817-672-7555" className="fs-4 fw-bold text-dark text-decoration-none">817-672-7555</a>
                </div>
              </div>
              <div className="map-container" style={{position: 'relative', borderRadius: '10px', overflow: 'hidden'}}>
                <iframe 
                  src="https://www.google.com/maps/d/embed?mid=1y6xsOSuArPFQ5W2QQFYV_hpKrF-mqIo&ehbc=2E312F" 
                  width="100%" 
                  height="350" 
                  style={{border: '0', borderRadius: '10px'}}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map">
                </iframe>
              </div>
            </div>
            <div className="col-md-6 offset-md-1 mt-5 mt-md-0">
              <WebForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
