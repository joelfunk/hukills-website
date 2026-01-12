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

export default async function SepticPumping({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title septic">
        <h1>Septic Pumping Services</h1>
      </div>
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-septic-pumping-list" data-bs-toggle="list" href="#list-septic-pumping" role="tab" aria-controls="list-septic-pumping">Septic Pumping</a>
              <a className="list-group-item list-group-item-action" id="list-grease-traps-list" data-bs-toggle="list" href="#list-grease-traps" role="tab" aria-controls="list-grease-traps">Grease Traps</a>
              <a className="list-group-item list-group-item-action" id="list-septic-installation-list" data-bs-toggle="list" href="#list-septic-installation" role="tab" aria-controls="list-septic-installation">Septic Installation</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-septic-pumping" role="tabpanel" aria-labelledby="list-septic-pumping-list">
                <h1>Hukill&apos;s Septic Pumping Services</h1>
                <h2>Maintaining Your Septic System</h2>
                <p>Periodic pumping of your septic tank is useful to maintaining the longevity of your septic system. We recommend having your tank pumped at least every five years to help keep your tank and septic system in proper working order. With proper maintenance, this will keep your septic system flowing freely.</p>
                <p>Most homeowners should have their tanks pumped at least every five years. The septic system is the digestive tract of your home: water leaches out through special perforated pipes into the drain or leach field, which prevents the tank from filling up too quickly.</p>
              </div>
              <div className="tab-pane fade" id="list-grease-traps" role="tabpanel" aria-labelledby="list-grease-traps-list">
                <h1>Grease Trap Services</h1>
                <h2>Commercial Grease Trap Cleaning</h2>
                <p>Keep your commercial kitchen running smoothly with our professional grease trap cleaning and maintenance services.</p>
                <Link href="/septic-pumping/grease-traps" className="btn service-btn">More About Grease Traps</Link>
              </div>
              <div className="tab-pane fade" id="list-septic-installation" role="tabpanel" aria-labelledby="list-septic-installation-list">
                <h1>Septic Installation Services</h1>
                <h2>Standard &amp; Advanced Systems</h2>
                <p>We install standard septic systems as well as the patented AdvanTex Treatment System for superior wastewater treatment.</p>
                <Link href="/septic-pumping/septic-installation" className="btn service-btn">More About Septic Installation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
