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

export default async function DrainCleaning({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title drain-cleaning">
        <h1>Drain Cleaning Services</h1>
      </div>
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-drain-cleaning-list" data-bs-toggle="list" href="#list-drain-cleaning" role="tab" aria-controls="list-drain-cleaning">Drain Cleaning</a>
              <a className="list-group-item list-group-item-action" id="list-hydrojetting-list" data-bs-toggle="list" href="#list-hydrojetting" role="tab" aria-controls="list-hydrojetting">Hydrojetting</a>
              <a className="list-group-item list-group-item-action" id="list-grease-traps-list" data-bs-toggle="list" href="#list-grease-traps" role="tab" aria-controls="list-grease-traps">Grease Traps</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-drain-cleaning" role="tabpanel" aria-labelledby="list-drain-cleaning-list">
                <h1>Drain Cleaning Services</h1>
                <h2>Professional Solutions for Every Type of Drain</h2>
                <p>Here at Hukill's Inc. we offer a multitude of drain cleaning capabilities. Everything from a plugged bathroom sink, tub, shower, toilet, kitchen sink, laundry, storm drains, downspout drains, driveway drains, catch Basin drains, sewer lines, irrigation lines, culverts, septic leach lines etc.</p>
                <p>Drain clogs are a problem for residential and commercial lines at some point. Materials get stuck in your sink, drains, toilets, showers, and main sewer lines that result in damage to your property. If your plunger won't move the clog and you need a professional near you to solve the problem, just call Hukill's Inc. Our professional technicians will help you choose which method that is appropriate for your drain cleaning needs.</p>
                <p>From small handheld machines all the way up to large truck mounted hydro jetters, we have the tools to clean all sizes and types of drains.</p>
              </div>
              <div className="tab-pane fade" id="list-hydrojetting" role="tabpanel" aria-labelledby="list-hydrojetting-list">
                <h1>Hydrojetting Services</h1>
                <h2>High-Pressure Drain Cleaning</h2>
                <p>Our hydrojetting service uses high-pressure water to thoroughly clean your drains and remove stubborn blockages.</p>
                <Link href="/drain-cleaning/hydrojetting" className="btn service-btn">More About HydroJetting</Link>
              </div>
              <div className="tab-pane fade" id="list-grease-traps" role="tabpanel" aria-labelledby="list-grease-traps-list">
                <h1>Grease Trap Services</h1>
                <h2>Commercial Grease Trap Cleaning</h2>
                <p>Keep your commercial kitchen running smoothly with our professional grease trap cleaning and maintenance services.</p>
                <Link href="/drain-cleaning/grease-traps" className="btn service-btn">More About Grease Traps</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
