import './App.css';

function App() {
  return (
    <div className="App">

      <header data-bs-theme="light">
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
          <div className="container-fluid">
            <a className="navbar-brand ms-5 my-2" href="#">
              <img src="images/hukills-logo.png" alt="Huckels Logo" height="60" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Restoration</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Remodel
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Kitchen & Bath Remodel</a></li>
                    <li><a className="dropdown-item" href="#">Cabinet Design & Install</a></li>
                    <li><a className="dropdown-item" href="#">Interior & Exterior Painting</a></li>
                    <li><a className="dropdown-item" href="#">Flooring Installation</a></li>
                    <li><a className="dropdown-item" href="#">Photo Gallery</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Plumbing
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Plumbing</a></li>
                    <li><a className="dropdown-item" href="#">Water Heaters</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Drain Cleaning
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Drain Cleaning</a></li>
                    <li><a className="dropdown-item" href="#">Hydrojetting</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Leak Detection
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Leak detection</a></li>
                    <li><a className="dropdown-item" href="#">Water line leak detection</a></li>
                    <li><a className="dropdown-item" href="#">Utility & line locating</a></li>
                    <li><a className="dropdown-item" href="#">Camera & video inspection</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Excavation</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              </ul>
              <div className="d-flex align-items-center ms-5 me-5">
                <div className="text-start">
                  <div className="text-muted fs-5">Request a Service</div>
                  <a href="tel:817-672-7555" className="text-dark fw-bold text-decoration-none fs-3">817-672-7555</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
        {/* Marketing messaging and featurettes
    ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        
        <div className="container mt-5">
            <div className="row">
                {/* Left Column for Tabs (e.g., 3 columns wide on medium screens and up) */}
                <div className="col-md-5">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-restoration-list" data-bs-toggle="list" href="#list-restoration" role="tab" aria-controls="list-restoration">Restoration</a>
                        <a className="list-group-item list-group-item-action" id="list-kitchen-bath-list" data-bs-toggle="list" href="#list-kitchen-bath" role="tab" aria-controls="list-kitchen-bath">Kitchen & Bath Remodel</a>
                        <a className="list-group-item list-group-item-action" id="list-cabinets-list" data-bs-toggle="list" href="#list-cabinets" role="tab" aria-controls="list-cabinets">Cabinet Design & Install</a>
                        <a className="list-group-item list-group-item-action" id="list-painting-list" data-bs-toggle="list" href="#list-painting" role="tab" aria-controls="list-painting">Interior & Exterior Painting</a>
                        <a className="list-group-item list-group-item-action" id="list-flooring-list" data-bs-toggle="list" href="#list-flooring" role="tab" aria-controls="list-flooring">Flooring Installation</a>
                        <a className="list-group-item list-group-item-action" id="list-plumbing-list" data-bs-toggle="list" href="#list-plumbing" role="tab" aria-controls="list-plumbing">Plumbing</a>
                        <a className="list-group-item list-group-item-action" id="list-water-heaters-list" data-bs-toggle="list" href="#list-water-heaters" role="tab" aria-controls="list-water-heaters">Water Heaters</a>
                        <a className="list-group-item list-group-item-action" id="list-drain-cleaning-list" data-bs-toggle="list" href="#list-drain-cleaning" role="tab" aria-controls="list-drain-cleaning">Drain Cleaning</a>
                        <a className="list-group-item list-group-item-action" id="list-hydrojetting-list" data-bs-toggle="list" href="#list-hydrojetting" role="tab" aria-controls="list-hydrojetting">Hydrojetting</a>
                        <a className="list-group-item list-group-item-action" id="list-leak-detection-list" data-bs-toggle="list" href="#list-leak-detection" role="tab" aria-controls="list-leak-detection">Leak Detection</a>
                        <a className="list-group-item list-group-item-action" id="list-camera-inspection-list" data-bs-toggle="list" href="#list-camera-inspection" role="tab" aria-controls="list-camera-inspection">Camera & Video Inspection</a>
                        <a className="list-group-item list-group-item-action" id="list-excavation-list" data-bs-toggle="list" href="#list-excavation" role="tab" aria-controls="list-excavation">Excavation</a>
                    </div>
                </div>

                {/* Right Column for Tab Content (e.g., 9 columns wide on medium screens and up) */}
                <div className="col-md-6 offset-md-1">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-restoration" role="tabpanel" aria-labelledby="list-restoration-list">
                            <h2 className="service-title">Restoration Services</h2>
                            <h3 className="service-subtitle">Bringing Your Property Back to Life</h3>
                            <p className="service-description">Our comprehensive restoration services help bring your property back to its original condition after water damage, fire damage, or other disasters. With over 40 years of experience, our team provides prompt emergency response and professional restoration work to minimize damage and get your home or business back to normal quickly.</p>
                            <p className="service-description">We handle everything from water extraction and structural drying to smoke damage cleanup and complete property restoration. Our certified technicians use advanced equipment and proven methods to ensure thorough restoration while working directly with your insurance company to streamline the claims process.</p>
                            <a href="#" className="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-kitchen-bath" role="tabpanel" aria-labelledby="list-kitchen-bath-list">
                            <h2 className="service-title">Kitchen & Bath Remodel</h2>
                            <h3 className="service-subtitle">Transform Your Space</h3>
                            <p className="service-description">Transform your kitchen or bathroom into the space of your dreams. Our experienced remodeling team handles everything from design consultation to final installation. We specialize in custom layouts, modern fixtures, countertops, tile work, and complete renovations that add value and beauty to your home.</p>
                            <p className="service-description">Whether you're looking for a complete gut renovation or a stylish update, we work closely with you to create functional, beautiful spaces that fit your lifestyle and budget. From selecting the perfect materials to coordinating all trades, we manage every detail to ensure a smooth remodeling experience.</p>
                            <a href="#" className="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-cabinets" role="tabpanel" aria-labelledby="list-cabinets-list">
                            <h2 className="service-title">Cabinet Design & Install</h2>
                            <h3 className="service-subtitle">Custom Solutions for Every Space</h3>
                            <p className="service-description">Enhance your space with custom cabinet solutions. We offer professional design services to maximize storage and functionality, along with expert installation of high-quality cabinets. Whether you need new kitchen cabinets, bathroom vanities, or custom built-ins, our team delivers craftsmanship that lasts.</p>
                            <p className="service-description">Our cabinet experts work with a wide range of styles, from traditional to contemporary, and partner with trusted manufacturers to provide quality options at every price point. We take precise measurements, handle all removal and disposal, and install your new cabinets with meticulous attention to detail.</p>
                            <a href="#" className="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-painting" role="tabpanel" aria-labelledby="list-painting-list">
                            <h2 className="service-title">Interior & Exterior Painting</h2>
                            <h3 className="service-subtitle">Professional Finish, Every Time</h3>
                            <p className="service-description">Give your property a fresh, professional look with our painting services. Our skilled painters handle both interior and exterior projects, using premium paints and proven techniques to deliver flawless finishes. From single rooms to entire buildings, we provide meticulous surface preparation and expert application.</p>
                            <p className="service-description">We understand that proper preparation is key to a lasting paint job. Our process includes thorough cleaning, repairs, priming, and multiple coats of quality paint. We protect your furniture and flooring, maintain a clean work area, and leave your space looking beautiful with crisp, clean lines.</p>
                            <a href="#" className="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-flooring" role="tabpanel" aria-labelledby="list-flooring-list">
                            <h2 className="service-title">Flooring Installation</h2>
                            <h3 class="service-subtitle">Beautiful Floors That Last</h3>
                            <p className="service-description">Update your floors with professional installation services. We work with all types of flooring materials including hardwood, laminate, tile, vinyl, and carpet. Our experienced installers ensure proper preparation and precise installation for beautiful, long-lasting results that complement your home's style.</p>
                            <p className="service-description">From subfloor preparation to final finishing touches, we handle every step of the flooring installation process. We help you select the right flooring material for your space, considering factors like durability, maintenance, and budget. Our installers are trained in the latest techniques to ensure your new floors look stunning and perform well for years to come.</p>
                            <a href="#" className="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-plumbing" role="tabpanel" aria-labelledby="list-plumbing-list">
                            <h2 className="service-title">Plumbing Services</h2>
                            <h3 class="service-subtitle">100+ Years of Combined Experience</h3>
                            <p className="service-description">Our licensed plumbers bring over 100 years of combined experience to handle all your plumbing needs. From minor repairs and fixture installations to complete re-piping and new construction plumbing, we deliver reliable service with guaranteed quality. Available for both residential and commercial properties throughout the Fort Worth and Weatherford areas.</p>
                            <p class="service-description">We offer comprehensive plumbing solutions including emergency repairs, routine maintenance, fixture upgrades, gas line installation, and sewer line services. Our trucks are fully stocked with quality parts, and our plumbers stay current with the latest codes and technologies to provide efficient, code-compliant work you can trust.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-water-heaters" role="tabpanel" aria-labelledby="list-water-heaters-list">
                            <h2 className="service-title">Water Heater Services</h2>
                            <h3 class="service-subtitle">Hot Water When You Need It</h3>
                            <p className="service-description">Keep your hot water flowing with our water heater installation, repair, and maintenance services. We work with all types of water heaters including traditional tank units, tankless systems, and high-efficiency models. Our experts help you choose the right system for your needs and provide professional installation and service.</p>
                            <p class="service-description">Whether your water heater is leaking, not producing enough hot water, or simply needs replacement, we can help. We'll assess your household's hot water demands and recommend energy-efficient options that save you money on utility bills. Our installations meet all local codes and come with manufacturer warranties for your peace of mind.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-drain-cleaning" role="tabpanel" aria-labelledby="list-drain-cleaning-list">
                            <h2 className="service-title">Drain Cleaning</h2>
                            <h3 class="service-subtitle">Keep Your Drains Flowing Freely</h3>
                            <p className="service-description">Clear stubborn clogs and prevent future blockages with our professional drain cleaning services. Using advanced equipment and techniques, we efficiently remove buildup, tree roots, and other obstructions from your drains and sewer lines. Regular drain cleaning maintenance helps prevent costly backups and keeps your plumbing system flowing smoothly.</p>
                            <p class="service-description">Our drain cleaning services go beyond simple snaking. We use professional-grade equipment to thoroughly clean your pipes and can perform video inspections to identify the source of recurring problems. From kitchen sinks and bathroom drains to main sewer lines, we have the tools and expertise to resolve any drainage issue.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-hydrojetting" role="tabpanel" aria-labelledby="list-hydrojetting-list">
                            <h2 className="service-title">Hydrojetting Services</h2>
                            <h3 class="service-subtitle">The Most Powerful Cleaning Method</h3>
                            <p class="service-description">Experience the most effective drain and sewer line cleaning with our hydrojetting services. This powerful method uses high-pressure water streams to completely remove grease, scale, and debris from pipe walls, restoring them to like-new condition. Hydrojetting is safe for your pipes and environmentally friendly, providing thorough cleaning that lasts longer than traditional methods.</p>
                            <p class="service-description">Hydrojetting is particularly effective for restaurants, commercial properties, and homes with recurring drain problems. The high-pressure water can cut through years of buildup and even remove tree roots from sewer lines. It's a preventive maintenance solution that can save you from costly repairs down the road.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-leak-detection" role="tabpanel" aria-labelledby="list-leak-detection-list">
                            <h2 className="service-title">Leak Detection</h2>
                            <h3 class="service-subtitle">Advanced Technology, Precise Results</h3>
                            <p class="service-description">Protect your property from water damage with our advanced leak detection services. Using state-of-the-art electronic equipment, we can locate hidden leaks in walls, under slabs, and underground without destructive digging. Early detection saves you money on water bills and prevents extensive damage to your property.</p>
                            <p class="service-description">Our leak detection specialists use acoustic listening devices, thermal imaging, and electronic line tracing to pinpoint the exact location of leaks. This technology allows us to find problems quickly and repair them with minimal disruption to your property, saving you time and money on restoration costs.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-camera-inspection" role="tabpanel" aria-labelledby="list-camera-inspection-list">
                            <h2 className="service-title">Camera & Video Inspection</h2>
                            <h3 class="service-subtitle">See Inside Your Pipes</h3>
                            <p class="service-description">See exactly what's happening inside your pipes with our video inspection services. We use specialized waterproof cameras to visually inspect drain lines, sewer pipes, and water lines, identifying problems like cracks, breaks, root intrusion, and blockages. This non-invasive technology provides accurate diagnostics and helps us recommend the most effective solutions.</p>
                            <p class="service-description">Video inspection is invaluable for pre-purchase home inspections, locating lost items, verifying repairs, and documenting pipe conditions for insurance claims. We provide you with a recording of the inspection so you can see the issues firsthand and understand our recommended repairs. This transparency helps you make informed decisions about your plumbing system.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                        <div className="tab-pane fade" id="list-excavation" role="tabpanel" aria-labelledby="list-excavation-list">
                            <h2 className="service-title">Excavation Services</h2>
                            <h3 class="service-subtitle">Professional Underground Work</h3>
                            <p className="service-description">When underground repairs or installations are necessary, our excavation team handles the job professionally and efficiently. We provide precise excavation for sewer line repairs, water line replacement, foundation work, and utility installations. Our careful approach minimizes disruption to your property and ensures proper backfill and restoration.</p>
                            <p class="service-description">We coordinate with utility companies to locate existing lines before digging, ensuring safe excavation. Our experienced operators work carefully to protect your landscaping and hardscaping as much as possible. After completing underground work, we properly compact and grade the excavated area, leaving your property neat and ready for restoration.</p>
                            <a href="#" class="btn service-btn">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* /.container */}

        {/* FEATURES SECTION - Full Width */}
        <div className="bg-body-secondary py-5 mt-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - 3 Features */}
              <div className="col-md-3">
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-certificate text-danger me-3 fs-2"></i>
                  <div>
                    <h3 className="fw-bold mb-2 fs-4">Licensed & Insured</h3>
                    <p>Our fully licensed and insured professionals bring decades of expertise to every project.</p>
                  </div>
                </div>
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-clock text-danger me-3 fs-2"></i>
                  <div>
                    <h3 class="fw-bold mb-2 fs-4">24/7 Emergency Service</h3>
                    <p>Available around the clock for your urgent plumbing and restoration emergencies.</p>
                  </div>
                </div>
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-shield-halved text-danger me-3 fs-2"></i>
                  <div>
                    <h3 class="fw-bold mb-2 fs-4">Quality Guaranteed</h3>
                    <p>We stand behind our work with comprehensive warranties and satisfaction guarantees.</p>
                  </div>
                </div>
              </div>

              {/* Center Column - Image */}
              <div class="col-md-4 offset-md-1 text-center">
                <img src="images/plumber.jpg" alt="Professional Plumber" class="img-fluid rounded" />
              </div>

              {/* Right Column - 3 Features */}
              <div class="col-md-3 offset-md-1">
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-dollar-sign text-danger me-3 fs-2"></i>
                  <div>
                    <h3 className="fw-bold mb-2 fs-4">Upfront Pricing</h3>
                    <p>Transparent quotes with no hidden fees. You'll know the cost before we start work.</p>
                  </div>
                </div>
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-user-tie text-danger me-3 fs-2"></i>
                  <div>
                    <h3 class="fw-bold mb-2 fs-4">Expert Technicians</h3>
                    <p>Our team brings over 100 years of combined experience to every job.</p>
                  </div>
                </div>
                <div class="mb-4 d-flex align-items-start">
                  <i className="fas fa-heart text-danger me-3 fs-2"></i>
                  <div>
                    <h3 class="fw-bold mb-2 fs-4">Local & Trusted</h3>
                    <p>Proudly serving Fort Worth, Weatherford, and surrounding areas for over 40 years.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div class="row">
            <div class="col-md-5">
              <h2 className="service-title">Our Loyal Customers</h2>
              <p class="service-description">For over 40 years, we've been proud to serve the Fort Worth, Weatherford, and surrounding communities with exceptional plumbing, restoration, and remodeling services. Our success is built on the trust and loyalty of our customers who continue to choose us for their home and business needs. We're grateful for every review, referral, and repeat customer who has helped us grow into the company we are today. Your satisfaction is our top priority, and we're committed to earning your trust with every job we complete.</p>
            </div>
            <div class="col-md-5 offset-md-2">
              <iframe src="https://reviews-iframe.podium.com?locationSlug=Iv5jtR4sCbAHWvM1diPe4Q&count=50" frameBorder="0" width="500" height="500"></iframe>
            </div>
          </div>
        </div>
        {/* /.container */}

        {/* REQUEST SERVICE SECTION - Full Width */}
        <div className="bg-body-secondary py-5 mt-5">
          <div className="container">
            <div class="row">
              {/* Left Column - Address & Map */}
              <div class="col-md-5">
                <div class="text-center mb-4">
                  <h3 class="fw-bold">Our Locations</h3>
                  <div class="row">
                    <div class="col-6">
                      <p class="mb-0 fw-bold">Fort Worth Office</p>
                      <p class="mb-0">3310 Lackland Rd</p>
                      <p class="mb-1">Fort Worth, TX 76116</p>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=3310+Lackland+Rd,Fort+Worth,TX+76116" target="_blank" className="text-danger small">Get Directions</a>
                    </div>
                    <div class="col-6">
                      <p class="mb-0 fw-bold">Weatherford Office</p>
                      <p class="mb-0">106 N Line St</p>
                      <p class="mb-1">Weatherford, TX 76086</p>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=106+N+Line+St,Weatherford,TX+76086" target="_blank" className="text-danger small">Get Directions</a>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="mb-0 text-muted">Call Us Today!</p>
                    <a href="tel:817-672-7555" className="fs-4 fw-bold text-dark text-decoration-none">817-672-7555</a>
                  </div>
                </div>
                {/* Google Maps Embed - Service Area View */}
                <div className="map-container" style={{position: 'relative', borderRadius: '10px', overflow: 'hidden'}}>
                  <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1y6xsOSuArPFQ5W2QQFYV_hpKrF-mqIo&ehbc=2E312F" 
                    width="100%" 
                    height="350" 
                    style={{border: '0', borderRadius: '10px'}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

              {/* Right Column - Request Service Form */}
              <div class="col-md-6 offset-md-1">
                <h2 class="service-title">Request Your Service</h2>
                <p class="lead mb-4">Fill out this form or call us at <a href="tel:817-672-7555" className="text-dark fw-bold text-decoration-none">817-672-7555</a> to get started today.</p>
                
                <form>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <input type="text" className="form-control form-control-lg" placeholder="First Name" required />
                    </div>
                    <div class="col-md-6">
                      <input type="text" className="form-control form-control-lg" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <input type="tel" className="form-control form-control-lg" placeholder="Phone" required />
                    </div>
                    <div class="col-md-6">
                      <input type="email" className="form-control form-control-lg" placeholder="Email" required />
                    </div>
                  </div>
                  <div class="mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Address" />
                  </div>
                  <div class="mb-3">
                    <select className="form-select form-select-lg">
                      <option selected>Are you a new customer?</option>
                      <option value="yes">Yes, I'm a new customer</option>
                      <option value="no">No, I'm an existing customer</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <textarea className="form-control form-control-lg" rows="4" placeholder="How can we help you?"></textarea>
                  </div>
                  <p class="text-muted small mb-3">By submitting, you agree to receive text messages from Hukill's at the number provided, including those related to your inquiry, follow-ups, and review requests, via automated technology. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.</p>
                  <button type="submit" className="btn service-btn btn-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-dark text-white py-4">
          <div className="container">
            <p class="float-end mb-0"><a href="#" className="text-white">Back to top</a></p>
            <p class="mb-0">
              &copy; 2027 Hukill's, Inc. &middot;
            </p>
          </div>
        </footer>
      </main>    </div>
  );
}

export default App;
