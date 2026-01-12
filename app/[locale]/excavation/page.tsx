import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Excavation({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title excavation">
        <h1>Excavation Services</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Hukill&apos;s Excavation / Underground Services</h1>
            <h3>Professional Excavation &amp; Site Work</h3>

            <p>We have expanded our excavation equipment to better serve the needs of our customers. Our excavators, back-hoes, and dump trucks are dedicated to getting your job done quickly and efficiently.</p>
            
            <h2>Our Excavation Services</h2>
            <h3>Comprehensive site work solutions</h3>
            <p>Our excavation services include:</p>
            <ul>
              <li>Trench digging</li>
              <li>Asphalt cutting and removal</li>
              <li>Septic site prep</li>
              <li>Septic tank replacement</li>
              <li>Septic system installation</li>
              <li>Water and sewer line replacement</li>
              <li>General demolition</li>
            </ul>
            
            <h2>Full Project Coordination</h2>
            <h3>From start to finish</h3>
            <p>We will coordinate each part of your excavation project from Utility Locating to excavating and back-filling. Our experienced team ensures your project is completed safely, on time, and within budget.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/excavation/excavation-hero.jpg" alt="Excavation Equipment" className="img-fluid rounded mb-4"/>
            <img src="/images/excavation/excavation2.jpg" alt="Excavation Services" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
