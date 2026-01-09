import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function UtilityLineLocating({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title leak-detection">
        <h1>Utility &amp; Line Locating</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Utility &amp; Line Locating</h1>
            <h3>Professional Underground Utility Detection</h3>

            <p>Hukill&apos;s Leak and Utility Locating Company can locate buried electric lines, communication lines, water lines, steel pipes and steel conduits that need to be located.</p>
            
            <p>For metal pipes and cables we use electromagnetic line locating equipment. A transmitter is set up either with a direct (conductive) connection to a utility, or inductively, where the signal waves are transmitted over or around a utility. These are very effective methods to locate an underground utility.</p>
            
            <h2>State of the Art</h2>
            <h3>Private utility locating specialists</h3>
            <p>Hukill&apos;s Leak Detection specializes in private utility locating, using state-of-the-art equipment for all pre-excavation and site planning needs. The State One-Call (811) only marks public utilities, those which are before the service meter. Any utility beyond the service meter is usually considered private and will not be covered under the one call system.</p>
            
            <h2>What We Can Locate</h2>
            <ul>
              <li><strong>Electric</strong> - landscape lighting, garage and shed power supply, pool equipment, water well pumps, irrigation control wiring.</li>
              <li><strong>Gas Service</strong> – pool heating equipment, heat systems for cottages or cabanas, direct feed for gas grills, etc.</li>
              <li><strong>Communication</strong> - cable and telephone lines from the Main House to the garage, cabanas or detached office.</li>
              <li><strong>Sanitary</strong> - the waste line from the house to the sewer main in the street or septic tanks with associated cesspools.</li>
              <li><strong>Water</strong> – primary and secondary water service lines, drinking water and irrigation lines.</li>
              <li><strong>Storm Drain</strong> – Roof leaders, catch basins and associated drywells.</li>
              <li><strong>Fuel Systems</strong> – Buried Tanks and associated piping.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src="/images/leak-detection/truck.jpg" alt="Hukill's Utility Locating Service Truck" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
