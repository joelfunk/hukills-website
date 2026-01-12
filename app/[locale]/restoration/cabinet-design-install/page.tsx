import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CabinetDesignInstall({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title restoration">
        <h1>Cabinet Design &amp; Install</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Cabinets</h1>
            <h3>Enhance Your Space with a Cabinet Upgrade</h3>

            <p>Allow our team of professionals to enhance your space with a cabinet upgrade. Bathrooms and kitchens complete the home. Let Hukill&apos;s Restoration assist with turning a dismal room into a stunning retreat.</p>
            
            <h2>Design</h2>
            <h3>Creating a one-of-a-kind space</h3>
            <p>Through the design process our goal is to create a one of a kind, custom to you space. Our team of experts has the skills to turn your vision into a reality. Our focus is listening to our clients&apos; input and expectations. As a result, we hope to leave our clients with a stylish, comfortable, yet functional space.</p>
            <ul>
              <li>Custom Layout</li>
              <li>Style Choices</li>
              <li>Color</li>
            </ul>
            
            <h2>Installation</h2>
            <h3>Professional in-house installation</h3>
            <p>Once the design process is finalized our in-house team will complete the cabinet installation. Throughout this process our goal is to maintain an organized job site as well as providing our customers with the space they envisioned.</p>
            <ul>
              <li>Space saving solutions</li>
              <li>Full Height Cabinets</li>
              <li>Pantry Cabinets</li>
              <li>Corner Cabinets</li>
            </ul>
            
            <h2>Cabinet Refacing</h2>
            <h3>A budget-friendly option</h3>
            <p>If our customers are looking for a more budget friendly option for updating their cabinetry we also offer cabinet refacing. Contact our office to receive a Free Estimate.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/restoration/kitchen-cabinets1.jpg" alt="Kitchen Cabinets" className="img-fluid rounded mb-4"/>
            <img src="/images/restoration/kitchen-cabinets2.jpg" alt="Cabinet Installation" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
