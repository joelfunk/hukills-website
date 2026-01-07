import React from 'react';
import RequestService from '../../components/RequestService';

function Plumbing() {
  return (
    <main>
      <div className="page-title plumbing">
        <h1>Plumbing Services</h1>
      </div>
     
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
              <div className="col-md-6 offset-md-1 services">
                  <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="list-restoration" role="tabpanel" aria-labelledby="list-restoration-list">
                          <h1>Restoration Services</h1>
                          <h2>Bringing Your Property Back to Life</h2>
                          <p>Our comprehensive restoration services help bring your property back to its original condition after water damage, fire damage, or other disasters. With over 40 years of experience, our team provides prompt emergency response and professional restoration work to minimize damage and get your home or business back to normal quickly.</p>
                          <p>We handle everything from water extraction and structural drying to smoke damage cleanup and complete property restoration. Our certified technicians use advanced equipment and proven methods to ensure thorough restoration while working directly with your insurance company to streamline the claims process.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-kitchen-bath" role="tabpanel" aria-labelledby="list-kitchen-bath-list">
                          <h2>Kitchen & Bath Remodel</h2>
                          <h3>Transform Your Space</h3>
                          <p>Transform your kitchen or bathroom into the space of your dreams. Our experienced remodeling team handles everything from design consultation to final installation. We specialize in custom layouts, modern fixtures, countertops, tile work, and complete renovations that add value and beauty to your home.</p>
                          <p>Whether you're looking for a complete gut renovation or a stylish update, we work closely with you to create functional, beautiful spaces that fit your lifestyle and budget. From selecting the perfect materials to coordinating all trades, we manage every detail to ensure a smooth remodeling experience.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-cabinets" role="tabpanel" aria-labelledby="list-cabinets-list">
                          <h2>Cabinet Design & Install</h2>
                          <h3>Custom Solutions for Every Space</h3>
                          <p>Enhance your space with custom cabinet solutions. We offer professional design services to maximize storage and functionality, along with expert installation of high-quality cabinets. Whether you need new kitchen cabinets, bathroom vanities, or custom built-ins, our team delivers craftsmanship that lasts.</p>
                          <p>Our cabinet experts work with a wide range of styles, from traditional to contemporary, and partner with trusted manufacturers to provide quality options at every price point. We take precise measurements, handle all removal and disposal, and install your new cabinets with meticulous attention to detail.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-painting" role="tabpanel" aria-labelledby="list-painting-list">
                          <h2>Interior & Exterior Painting</h2>
                          <h3>Professional Finish, Every Time</h3>
                          <p>Give your property a fresh, professional look with our painting services. Our skilled painters handle both interior and exterior projects, using premium paints and proven techniques to deliver flawless finishes. From single rooms to entire buildings, we provide meticulous surface preparation and expert application.</p>
                          <p>We understand that proper preparation is key to a lasting paint job. Our process includes thorough cleaning, repairs, priming, and multiple coats of quality paint. We protect your furniture and flooring, maintain a clean work area, and leave your space looking beautiful with crisp, clean lines.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-flooring" role="tabpanel" aria-labelledby="list-flooring-list">
                          <h2>Flooring Installation</h2>
                          <h3>Beautiful Floors That Last</h3>
                          <p>Update your floors with professional installation services. We work with all types of flooring materials including hardwood, laminate, tile, vinyl, and carpet. Our experienced installers ensure proper preparation and precise installation for beautiful, long-lasting results that complement your home's style.</p>
                          <p>From subfloor preparation to final finishing touches, we handle every step of the flooring installation process. We help you select the right flooring material for your space, considering factors like durability, maintenance, and budget. Our installers are trained in the latest techniques to ensure your new floors look stunning and perform well for years to come.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-plumbing" role="tabpanel" aria-labelledby="list-plumbing-list">
                          <h2>Plumbing Services</h2>
                          <h3>100+ Years of Combined Experience</h3>
                          <p>Our licensed plumbers bring over 100 years of combined experience to handle all your plumbing needs. From minor repairs and fixture installations to complete re-piping and new construction plumbing, we deliver reliable service with guaranteed quality. Available for both residential and commercial properties throughout the Fort Worth and Weatherford areas.</p>
                          <p>We offer comprehensive plumbing solutions including emergency repairs, routine maintenance, fixture upgrades, gas line installation, and sewer line services. Our trucks are fully stocked with quality parts, and our plumbers stay current with the latest codes and technologies to provide efficient, code-compliant work you can trust.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-water-heaters" role="tabpanel" aria-labelledby="list-water-heaters-list">
                          <h2>Water Heater Services</h2>
                          <h3>Hot Water When You Need It</h3>
                          <p>Keep your hot water flowing with our water heater installation, repair, and maintenance services. We work with all types of water heaters including traditional tank units, tankless systems, and high-efficiency models. Our experts help you choose the right system for your needs and provide professional installation and service.</p>
                          <p>Whether your water heater is leaking, not producing enough hot water, or simply needs replacement, we can help. We'll assess your household's hot water demands and recommend energy-efficient options that save you money on utility bills. Our installations meet all local codes and come with manufacturer warranties for your peace of mind.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-drain-cleaning" role="tabpanel" aria-labelledby="list-drain-cleaning-list">
                          <h2>Drain Cleaning</h2>
                          <h3>Keep Your Drains Flowing Freely</h3>
                          <p>Clear stubborn clogs and prevent future blockages with our professional drain cleaning services. Using advanced equipment and techniques, we efficiently remove buildup, tree roots, and other obstructions from your drains and sewer lines. Regular drain cleaning maintenance helps prevent costly backups and keeps your plumbing system flowing smoothly.</p>
                          <p>Our drain cleaning services go beyond simple snaking. We use professional-grade equipment to thoroughly clean your pipes and can perform video inspections to identify the source of recurring problems. From kitchen sinks and bathroom drains to main sewer lines, we have the tools and expertise to resolve any drainage issue.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-hydrojetting" role="tabpanel" aria-labelledby="list-hydrojetting-list">
                          <h2>Hydrojetting Services</h2>
                          <h3>The Most Powerful Cleaning Method</h3>
                          <p>Experience the most effective drain and sewer line cleaning with our hydrojetting services. This powerful method uses high-pressure water streams to completely remove grease, scale, and debris from pipe walls, restoring them to like-new condition. Hydrojetting is safe for your pipes and environmentally friendly, providing thorough cleaning that lasts longer than traditional methods.</p>
                          <p>Hydrojetting is particularly effective for restaurants, commercial properties, and homes with recurring drain problems. The high-pressure water can cut through years of buildup and even remove tree roots from sewer lines. It's a preventive maintenance solution that can save you from costly repairs down the road.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-leak-detection" role="tabpanel" aria-labelledby="list-leak-detection-list">
                          <h2>Leak Detection</h2>
                          <h3>Advanced Technology, Precise Results</h3>
                          <p>Protect your property from water damage with our advanced leak detection services. Using state-of-the-art electronic equipment, we can locate hidden leaks in walls, under slabs, and underground without destructive digging. Early detection saves you money on water bills and prevents extensive damage to your property.</p>
                          <p>Our leak detection specialists use acoustic listening devices, thermal imaging, and electronic line tracing to pinpoint the exact location of leaks. This technology allows us to find problems quickly and repair them with minimal disruption to your property, saving you time and money on restoration costs.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-camera-inspection" role="tabpanel" aria-labelledby="list-camera-inspection-list">
                          <h2>Camera & Video Inspection</h2>
                          <h3>See Inside Your Pipes</h3>
                          <p>See exactly what's happening inside your pipes with our video inspection services. We use specialized waterproof cameras to visually inspect drain lines, sewer pipes, and water lines, identifying problems like cracks, breaks, root intrusion, and blockages. This non-invasive technology provides accurate diagnostics and helps us recommend the most effective solutions.</p>
                          <p>Video inspection is invaluable for pre-purchase home inspections, locating lost items, verifying repairs, and documenting pipe conditions for insurance claims. We provide you with a recording of the inspection so you can see the issues firsthand and understand our recommended repairs. This transparency helps you make informed decisions about your plumbing system.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                      <div className="tab-pane fade" id="list-excavation" role="tabpanel" aria-labelledby="list-excavation-list">
                          <h2>Excavation Services</h2>
                          <h3>Professional Underground Work</h3>
                          <p>When underground repairs or installations are necessary, our excavation team handles the job professionally and efficiently. We provide precise excavation for sewer line repairs, water line replacement, foundation work, and utility installations. Our careful approach minimizes disruption to your property and ensures proper backfill and restoration.</p>
                          <p>We coordinate with utility companies to locate existing lines before digging, ensuring safe excavation. Our experienced operators work carefully to protect your landscaping and hardscaping as much as possible. After completing underground work, we properly compact and grade the excavated area, leaving your property neat and ready for restoration.</p>
                          <a href="#" className="btn service-btn">More</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* /.container */}

      {/* REQUEST SERVICE SECTION - Full Width */}
      <RequestService />
    </main>
  );
}

export default Plumbing;
