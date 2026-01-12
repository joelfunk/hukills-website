import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function GreaseTraps({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title septic">
        <h1>Grease Traps</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Grease Trap Services</h1>
            <h3>Professional Maintenance for Commercial Kitchens</h3>

            <h2>What are Grease Traps?</h2>
            <h3>Protecting your sewer lines from FOG</h3>
            <p>Grease traps are designed to stop fats, oils or grease from entering the sewer lines. If left unchecked, fats, oils and grease solidifies and sticks to the insides of the pipes, trapping food and debris. It then eventually obstructs the flow of wastewater and causes the sewage to back up. Grease traps are an effective tool for preventing the fats, oils or grease from entering the sewer lines.</p>
            
            <h2>Regular Maintenance is Essential</h2>
            <h3>Keep your business running smoothly</h3>
            <p>If not cleaned regularly, grease traps can be a huge hassle for restaurants and commercial kitchens. Grease trap maintenance should be performed on a routine schedule to keep the drains flowing smoothly preventing costly back-ups and keeping your business up and running.</p>
            
            <h2>Top Performance Tips</h2>
            <h3>How can you keep your grease trap running at top performance?</h3>
            <ul>
              <li>Make sure that you are scheduling regular grease trap maintenance.</li>
              <li>Ensure that your food prep and wash sinks are tied into the trap.</li>
              <li>Make sure that your trap is properly sized.</li>
              <li>Train your staff to remove as much waste and food solids from plates and pots before washing.</li>
            </ul>
            <p>Regular maintenance on grease traps can minimize the risk of untimely and costly service calls. Contact Hukill&apos;s Inc. about preventative maintenance of these high volume restaurant drains.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/drain-cleaning/grease-trap.png" alt="Grease Trap Diagram" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
