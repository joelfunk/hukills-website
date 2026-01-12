import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function InteriorExteriorPainting({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Interior &amp; Exterior Painting</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Painting</h1>
            <h3>Professional Painting Services</h3>

            <p>Our team&apos;s attention to detail can assist with all of your home&apos;s painting or repainting necessities.</p>
            
            <h2>Interior</h2>
            <h3>Complete interior painting solutions</h3>
            <p>Hukill&apos;s Restoration can complete your painting project from start to finish. Paint is an affordable way to update a home without breaking the bank. If you are thinking of starting a paint project have Hukill&apos;s Restoration give you a free estimate and let us tackle it for you.</p>
            <ul>
              <li>Walls/Ceilings</li>
              <li>Trim work</li>
              <li>Doors</li>
              <li>New construction</li>
              <li>Cabinetry</li>
              <li>Stain grade Doors and Trim</li>
            </ul>
            
            <h2>Exterior</h2>
            <h3>Enhance your curb appeal</h3>
            <p>Curb appeal is everything! Hukill&apos;s Restoration is prepared to accommodate all of your home&apos;s exterior demands.</p>
            <ul>
              <li>Full Exterior Repaint</li>
              <li>New Construction</li>
              <li>Deck Finishing</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src="/images/restoration/painting.jpg" alt="Painting Services" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
