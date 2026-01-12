import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Restoration({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Restoration / Remodel</h1>
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
              <a className="list-group-item list-group-item-action" id="list-countertops-list" data-bs-toggle="list" href="#list-countertops" role="tab" aria-controls="list-countertops">Granite/Stone Countertops</a>
              <a className="list-group-item list-group-item-action" id="list-gallery-list" data-bs-toggle="list" href="#list-gallery" role="tab" aria-controls="list-gallery">Photo Gallery</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services mt-5 mt-md-0">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-restoration" role="tabpanel" aria-labelledby="list-restoration-list">
                <h1>Hukill&apos;s Restoration</h1>
                <h2>Unparalleled Expertise in Restoration</h2>
                <p>The level of understanding that our team of professionals brings to the many degrees of restoration is unparalleled.</p>
                
                <h3>Water Damage</h3>
                <p>An immediate response is crucial when dealing with water damage. Hukill&apos;s Restoration professionals are available 24/7 with their advanced equipment and techniques to extract water quickly and begin the drying process to mitigate further damage.</p>
                <ul>
                  <li>Water Extraction and Drying</li>
                  <li>Demolition</li>
                  <li>Reconstruction</li>
                  <li>Cleaning and Deodorizing</li>
                  <li>Roof Tarping</li>
                  <li>Sewage Cleanup</li>
                </ul>
                
                <h3>Fire Damage</h3>
                <p>Hukill&apos;s Restoration has the resources and training to quickly clean up and restore your home to pre-fire condition. The restoration process includes mitigating the damage and providing smoke damage cleanup.</p>
                <ul>
                  <li>Emergency Board-Up and Site Containment</li>
                  <li>Demolition</li>
                  <li>Reconstruction</li>
                </ul>
                
                <h3>Storm Damage</h3>
                <p>Hukill&apos;s Restoration&apos;s renovation team has the expertise to handle storm damage including the following:</p>
                <ul>
                  <li>Roof Repair</li>
                  <li>Roof Tarping</li>
                  <li>Demolition</li>
                  <li>Board-Ups</li>
                  <li>Clean-Ups</li>
                  <li>Reconstruction</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="list-kitchen-bath" role="tabpanel" aria-labelledby="list-kitchen-bath-list">
                <h1>Kitchen &amp; Bath Remodel</h1>
                <h2>Transform Your Living Spaces</h2>
                <p>Our expert team can help you design and build the kitchen or bathroom of your dreams.</p>
                <Link href="/restoration/kitchen-bath-remodel" className="btn service-btn">More About Kitchen &amp; Bath Remodel</Link>
              </div>
              <div className="tab-pane fade" id="list-cabinets" role="tabpanel" aria-labelledby="list-cabinets-list">
                <h1>Cabinet Design &amp; Install</h1>
                <h2>Custom Cabinetry Solutions</h2>
                <p>From design to installation, we provide complete cabinet solutions for your home.</p>
                <Link href="/restoration/cabinet-design-install" className="btn service-btn">More About Cabinet Design &amp; Install</Link>
              </div>
              <div className="tab-pane fade" id="list-painting" role="tabpanel" aria-labelledby="list-painting-list">
                <h1>Interior &amp; Exterior Painting</h1>
                <h2>Professional Painting Services</h2>
                <p>Quality painting services for both interior and exterior surfaces.</p>
                <Link href="/restoration/interior-exterior-painting" className="btn service-btn">More About Painting Services</Link>
              </div>
              <div className="tab-pane fade" id="list-flooring" role="tabpanel" aria-labelledby="list-flooring-list">
                <h1>Flooring Installation</h1>
                <h2>Expert Flooring Solutions</h2>
                <p>We install a wide variety of flooring options to suit your style and budget.</p>
                <Link href="/restoration/flooring-installation" className="btn service-btn">More About Flooring Installation</Link>
              </div>
              <div className="tab-pane fade" id="list-countertops" role="tabpanel" aria-labelledby="list-countertops-list">
                <h1>Granite/Stone Countertops</h1>
                <h2>Premium Countertop Installation</h2>
                <p>Beautiful, durable granite and stone countertops for your kitchen and bath.</p>
                <Link href="/restoration/granite-countertops" className="btn service-btn">More About Countertops</Link>
              </div>
              <div className="tab-pane fade" id="list-gallery" role="tabpanel" aria-labelledby="list-gallery-list">
                <h1>Photo Gallery</h1>
                <h2>See Our Work</h2>
                <p>Browse through our gallery of completed restoration and remodeling projects.</p>
                <Link href="/restoration/photo-gallery" className="btn service-btn">View Photo Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
