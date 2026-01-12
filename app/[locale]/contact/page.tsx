import WebForm from '@/components/WebForm';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title contact">
        <h1>Contact Us</h1>
      </div>

      {/* REQUEST SERVICE SECTION */}
      <div className="bg-body-secondary py-5">
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
            <div className="col-md-6 offset-md-1">
              <WebForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
