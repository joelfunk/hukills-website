import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Plumbing({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title plumbing">
        <h1>Plumbing Services</h1>
      </div>
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-plumbing-list" data-bs-toggle="list" href="#list-plumbing" role="tab" aria-controls="list-plumbing">Plumbing</a>
              <a className="list-group-item list-group-item-action" id="list-water-heaters-list" data-bs-toggle="list" href="#list-water-heaters" role="tab" aria-controls="list-water-heaters">Water Heaters</a>
              <a className="list-group-item list-group-item-action" id="list-drain-cleaning-list" data-bs-toggle="list" href="#list-drain-cleaning" role="tab" aria-controls="list-drain-cleaning">Drain Cleaning</a>
              <a className="list-group-item list-group-item-action" id="list-hydrojetting-list" data-bs-toggle="list" href="#list-hydrojetting" role="tab" aria-controls="list-hydrojetting">Hydrojetting</a>
              <a className="list-group-item list-group-item-action" id="list-leak-detection-list" data-bs-toggle="list" href="#list-leak-detection" role="tab" aria-controls="list-leak-detection">Leak Detection</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-plumbing" role="tabpanel" aria-labelledby="list-plumbing-list">
                <h1>Plumbing Services</h1>
                <h2>100+ Years of Combined Experience</h2>
                <p>Our licensed plumbers bring over 100 years of combined experience to handle all your plumbing needs. From minor repairs and fixture installations to complete re-piping and new construction plumbing, we deliver reliable service with guaranteed quality.</p>
                <a href="#" className="btn service-btn">More</a>
              </div>
              <div className="tab-pane fade" id="list-water-heaters" role="tabpanel" aria-labelledby="list-water-heaters-list">
                <h1>Water Heater Services</h1>
                <h2>Hot Water When You Need It</h2>
                <p>Keep your hot water flowing with our water heater installation, repair, and maintenance services.</p>
                <a href="/plumbing/water-heaters" className="btn service-btn">More</a>
              </div>
              <div className="tab-pane fade" id="list-drain-cleaning" role="tabpanel" aria-labelledby="list-drain-cleaning-list">
                <h1>Drain Cleaning</h1>
                <h2>Keep Your Drains Flowing Freely</h2>
                <p>Clear stubborn clogs and prevent future blockages with our professional drain cleaning services.</p>
                <a href="#" className="btn service-btn">More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
