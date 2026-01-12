import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function GraniteCountertops({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Granite/Stone Countertops</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Granite &amp; Stone Countertops</h1>
            <h3>Premium Countertop Installation</h3>

            <p>Transform your kitchen or bathroom with beautiful, durable granite and stone countertops. Hukill&apos;s Restoration offers professional countertop installation services that combine timeless elegance with lasting durability.</p>
            
            <h2>Material Options</h2>
            <h3>Quality surfaces for every style</h3>
            <p>We offer a wide variety of natural and engineered stone options to match your design preferences and lifestyle needs. Our team will help you select the perfect material for your space.</p>
            <ul>
              <li>Granite</li>
              <li>Quartz</li>
              <li>Marble</li>
              <li>Soapstone</li>
              <li>Quartzite</li>
            </ul>
            
            <h2>Our Process</h2>
            <h3>From selection to installation</h3>
            <p>Our experienced team guides you through every step of the countertop installation process. We take precise measurements, help you select the perfect slab, and complete professional installation with meticulous attention to detail.</p>
            <ul>
              <li>In-home consultation</li>
              <li>Precise templating and measurement</li>
              <li>Professional fabrication</li>
              <li>Expert installation</li>
              <li>Sink and faucet cutouts</li>
              <li>Edge profile selection</li>
            </ul>
            
            <h2>Why Choose Stone Countertops?</h2>
            <h3>Beauty and functionality</h3>
            <p>Stone countertops add value to your home while providing a durable, heat-resistant, and easy-to-clean surface. Each slab is unique, giving your kitchen or bathroom a one-of-a-kind look that will last for years to come. Contact our office for a Free Estimate.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/restoration/countertop1.jpg" alt="Stone Countertops" className="img-fluid rounded mb-4"/>
            <img src="/images/restoration/countertop2.jpg" alt="Granite Countertop Installation" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
