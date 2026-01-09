import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Hydrojetting({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title drain-cleaning">
        <h1>Hydrojetting</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Hydrojetting Services</h1>
            <h3>High-Pressure Water Drain Cleaning</h3>

            <p>This is an alternative method to regular snaking or rooting in some cases. Hydrojetting uses very high-pressure water streams to cut through clogs and blockages in sewer drains, area yard drains and storm drains. At approximately 3500 PSI, hydro jetting can cut through the toughest debris and stoppages and is frequently used in restaurants and commercial applications where grease, food waste or industrial debris are present.</p>
            
            <h2>Effective Odor Control</h2>
            <h3>Eliminate persistent drain odors</h3>
            <p>Hydrojetting can also be effective in resolving odor issues in drains with heavy debris or grease build-up. The high-pressure water thoroughly cleans pipe walls, removing accumulated residue that causes unpleasant smells.</p>
            
            <h2>Professional Assessment</h2>
            <h3>The right solution for your needs</h3>
            <p>Just call Hukill&apos;s Inc. and our professional plumbers will help you choose the hydro jetting method that is appropriate for your drain cleaning problem. We&apos;ll assess your situation and determine whether hydrojetting is the best solution for your specific drain cleaning needs.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/drain-cleaning/hydro-jetting.jpg" alt="Hydrojetting Equipment" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
