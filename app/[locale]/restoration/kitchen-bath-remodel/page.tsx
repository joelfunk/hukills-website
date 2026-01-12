import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function KitchenBathRemodel({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Kitchen &amp; Bath Remodeling</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Kitchen &amp; Bath Remodeling</h1>
            <h3>Complete Remodeling &amp; Reconstruction</h3>

            <p>Our team of professionals is prepared to complete your kitchen or bathroom remodeling and reconstruction needs.</p>
            
            <h2>Kitchen</h2>
            <h3>Expert kitchen remodeling services</h3>
            <p>We understand that remodeling a crucial part of your home such as the kitchen can be a daunting task. At Hukill&apos;s Restoration we go the extra mile to ensure that the remodeling process goes as smoothly and quickly as possible. Our team&apos;s attention to detail and level of service is unmatched.</p>
            <ul>
              <li>Custom Remodel</li>
              <li>Cabinet Supply and Install</li>
              <li>Countertops</li>
              <li>Tile Installation</li>
              <li>All Flooring Installation</li>
            </ul>
            
            <h2>Bathroom</h2>
            <h3>Transform your bathroom into a spa oasis</h3>
            <p>The bathroom is an essential space in your home. Whether in need of updating or a full remodel, Hukill&apos;s Restoration has the skills to turn a tired bathroom into a spa oasis. Let us help create the bathroom of your dreams.</p>
            <ul>
              <li>Fixture Replacement</li>
              <li>Vanity Cabinets</li>
              <li>Tile Installation</li>
              <li>Shower Door Installation</li>
              <li>Tub and Shower Installation</li>
              <li>Full Reconstruction</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src="/images/restoration/kitchen-remodel.jpg" alt="Kitchen Remodel" className="img-fluid rounded mb-4"/>
            <img src="/images/restoration/kitchen.jpg" alt="Kitchen Remodeling" className="img-fluid rounded mb-4"/>
            <img src="/images/restoration/bathroom.jpg" alt="Bathroom Remodeling" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
