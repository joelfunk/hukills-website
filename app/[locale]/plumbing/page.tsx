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
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services mt-5 mt-md-0">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-plumbing" role="tabpanel" aria-labelledby="list-plumbing-list">
                <h1>Plumbing Services</h1>
                <h2>100+ Years of Combined Experience</h2>
                <p>Hukill's is here for all your plumbing needs. No matter how big or how small. We repair and replace everything from toilets, leaking faucets, shower valves, water heaters, pressure reducing valves, backflow devices, garbage disposals, water lines, Sewer lines and more. Let our experienced team assist you in fixing any of your plumbing problems.</p>
              </div>
              <div className="tab-pane fade" id="list-water-heaters" role="tabpanel" aria-labelledby="list-water-heaters-list">
                <h1>Water Heater Services</h1>
                <h2>Hot Water When You Need It</h2>
                <p>Keep your hot water flowing with our water heater installation, repair, and maintenance services.</p>
                <Link href="/plumbing/water-heaters" className="btn service-btn">More About Water Heaters</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
