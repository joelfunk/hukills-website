import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SepticInstallation({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title septic">
        <h1>Septic Installation</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Hukill&apos;s Septic Installation Services</h1>
            <h3>Standard &amp; Advanced Treatment Systems</h3>

            <h2>Standard Septic Systems</h2>
            <p>A standard septic system is normally a 1000 or 1500 gallon septic tank that is installed with a gravity line that leaves the septic tank carrying liquid out to a drain field that is installed with perforated pipe and distribution collection boxes where the water will absorb into the existing soil.</p>
            
            <h2>AdvanTex Treatment System</h2>
            <h3>A significant improvement on proven technology</h3>
            <p>The patented AdvanTex Treatment System is a significant improvement on a proven method. AdvanTex works just like a recirculating sand filter (RSF), a reliable technology that Orenco has helped to perfect over the past 20 years.</p>
            
            <p>Just like an RSF, your AdvanTex system includes a processing tank and a control panel with a programmable timer for even, steady wastewater treatment, even under peak conditions — such as parties and weekend clothes washing.</p>
            
            <h2>Advanced Textile Filter Technology</h2>
            <h3>Lightweight, highly absorbent material</h3>
            <p>The system also includes the AdvanTex textile filter, a sturdy, watertight fiberglass basin filled with an engineered textile material. This lightweight, highly absorbent material treats a tremendous amount of wastewater in a small space.</p>
            
            <h2>Proven Performance</h2>
            <h3>Trusted worldwide</h3>
            <p>More than 15,000 of Orenco&apos;s textile filters have been installed throughout the United States, Canada, Europe, and Australasia on sites ranging from federal demonstration projects to university testing facilities, single-family homes, commercial properties, and community systems. Third-party testing shows that AdvanTex Treatment Systems do a better job of treating wastewater than most municipal sewers.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/septic/septic1.webp" alt="Septic System Installation" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
