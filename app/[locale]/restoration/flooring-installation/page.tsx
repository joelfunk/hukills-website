import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FlooringInstallation({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Flooring Installation</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Flooring Installation</h1>
            <h3>Complete Flooring Solutions</h3>

            <p>Our team of professionals are prepared to help you with all of your flooring needs.</p>
            
            <h2>Hardwood &amp; Tile</h2>
            <h3>Durable flooring options</h3>
            <p>When looking for a more durable solution for your home, hardwood, laminate, and tile flooring has a variety of options to satisfy all design preferences. Hukill&apos;s Restoration is knowledgeable in all flooring types and is qualified to complete the flooring installation process.</p>
            <ul>
              <li>Hardwood</li>
              <li>Engineered Hardwood</li>
              <li>Tile</li>
              <li>Vinyl Planking</li>
              <li>Sheet Vinyl</li>
            </ul>
            
            <h2>Carpet</h2>
            <h3>Cozy comfort for your home</h3>
            <p>When our customers are hoping for more of a cozy feel, carpet can be a considerable choice. The options are endless, from an array of colors and styles to textures and patterns, carpet can make a house feel like a home.</p>
            <ul>
              <li>Plush</li>
              <li>Textured</li>
              <li>Loop</li>
              <li>Berber</li>
              <li>Cushion Selection</li>
            </ul>
            
            <h2>Removal</h2>
            <h3>Let us do the heavy lifting</h3>
            <p>Removing carpet can be a daunting task. If you are in need of removal let Hukill&apos;s Restoration do the work for you. Our team arrives, completes the carpet removal process, and hauls away the debris. Contact our office to schedule a Free Estimate.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/restoration/flooring1.jpg" alt="Flooring Installation" className="img-fluid rounded mb-4"/>
            <img src="/images/restoration/flooring2.jpg" alt="Flooring Options" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
